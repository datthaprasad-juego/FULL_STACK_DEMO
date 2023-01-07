const {
  findOne,
  updateOne,
  insertOne,
  findOneById,
} = require("../../firebase");
const global = require("../../global");
const { isAuthenticatedUser } = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { access_token } = req.headers;
  const authenticatedUser = await isAuthenticatedUser(res, access_token);
  if (!authenticatedUser) return;

  const { opponent_user_id } = req.body;
  const opponentUser = await findOneById("user", opponent_user_id);
  if (
    !opponentUser ||
    authenticatedUser.user_id === opponent_user_id ||
    !opponentUser.is_verified_user
  )
    return sendResponse(res, "OPPONENT_NOT_FOUND", {});

  //deduct points to initiate game
  if (authenticatedUser.points < global.ROOM_INITIATE_COST)
    return sendResponse(res, "INSUFFICIENT_POINTS", {});

  await updateOne("user", authenticatedUser.user_id, {
    points: authenticatedUser.points - global.ROOM_INITIATE_COST,
  });

  //parsing the data
  authenticatedUser.game_cards = JSON.parse(authenticatedUser.game_cards);
  opponentUser.game_cards = JSON.parse(opponentUser.game_cards);

  const userActivePlayerIndex = Math.floor(
    Math.random() * authenticatedUser.game_cards.length
  );
  const opponentActiveIndex = Math.floor(
    Math.random() * opponentUser.game_cards.length
  );
  const userActivePlayer = authenticatedUser.game_cards[userActivePlayerIndex];

  //find Active user room
  let activeRoom = await findOne("room", {
    user_id: authenticatedUser.user_id,
    status: 1,
  });
  if (activeRoom) {
    await updateOne("room", activeRoom.room_id, {
      user_cards: authenticatedUser.game_cards,
      opponent_cards: opponentUser.game_cards,
      opponent_id: opponent_user_id,
      user_active_index: userActivePlayerIndex,
      opponent_active_index: opponentActiveIndex,
    });
  } else {
    const insertId = await insertOne("room", {
      user_id: authenticatedUser.user_id,
      opponent_id: opponent_user_id,
      opponent_cards: opponentUser.game_cards,
      user_cards: authenticatedUser.game_cards,
      status: 1,
      user_active_index: userActivePlayerIndex,
      opponent_active_index: opponentActiveIndex,
      user_used_players: [],
      opponent_used_players: [],
      created_at: new Date(),
      user_wins_count: 0,
    });
    activeRoom = { room_id: insertId };
  }

  return sendResponse(res, "SUCCESS", {
    room_id: activeRoom.room_id,
    activePlayer: userActivePlayer,
    remainingCards: global.DEFAULT_CARDS.length,
  });
};
