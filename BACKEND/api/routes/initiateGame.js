const global = require("../../global");
const { findOne, updateOne, insertOne } = require("../../mysql/interface");
const { isAuthenticatedUser } = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { access_token } = req.headers;
  const authenticatedUser = await isAuthenticatedUser(res, access_token);
  if (!authenticatedUser) return;

  const { opponent_user_id } = req.body;
  const opponentUser = await findOne(
    "user",
    `user_id = ${opponent_user_id} AND is_verified_user = 1`
  );
  if (!opponentUser || authenticatedUser.user_id === opponent_user_id)
    return sendResponse(res, "OPPONENT_NOT_FOUND", {});

  //deduct points to initiate game
  if (authenticatedUser.points < global.ROOM_INITIATE_COST)
    return sendResponse(res, "INSUFFICIENT_POINTS", {});
  await updateOne(
    "user",
    `user_id = ${authenticatedUser.user_id}`,
    `points = points - ${global.ROOM_INITIATE_COST}`
  );

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
  let activeRoom = await findOne(
    "room",
    `user_id = ${authenticatedUser.user_id} AND status = 1`
  );
  if (activeRoom) {
    await updateOne(
      "room",
      `room_id = ${activeRoom.room_id}`,
      `user_cards = '${JSON.stringify(
        authenticatedUser.game_cards
      )}', opponent_cards = '${JSON.stringify(
        opponentUser.game_cards
      )}',opponent_id = ${opponent_user_id},
      user_active_index = ${userActivePlayerIndex},
      opponent_active_index = ${opponentActiveIndex}`
    );
  } else {
    const { insertId } = await insertOne("room", {
      user_id: authenticatedUser.user_id,
      opponent_id: opponent_user_id,
      opponent_cards: JSON.stringify(opponentUser.game_cards),
      user_cards: JSON.stringify(authenticatedUser.game_cards),
      status: 1,
      user_active_index: userActivePlayerIndex,
      opponent_active_index: opponentActiveIndex,
      user_used_players: JSON.stringify([]),
      opponent_used_players: JSON.stringify([]),
      created_at: new Date(),
    });
    activeRoom = { room_id: insertId };
  }

  return sendResponse(res, "SUCCESS", {
    room_id: activeRoom.room_id,
    activePlayer: userActivePlayer,
    remainingCards: global.DEFAULT_CARDS.length,
  });
};
