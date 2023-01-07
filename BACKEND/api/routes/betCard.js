const global = require("../../global");
const { updateOne, insertOne, findOneById } = require("../../firebase");
const { isAuthenticatedUser } = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { selectedAttributeIndex, selectedAttributeValue, roomId } = req.body;
  const { access_token } = req.headers;

  if (isNaN(selectedAttributeIndex) || !selectedAttributeValue || !roomId)
    return sendResponse(res, "INPUTS_MISSING", {});

  //Variables
  let isGameWon = 0;

  //Authentiaction
  const authenticatedUser = await isAuthenticatedUser(res, access_token);
  if (!authenticatedUser) return;

  //Validate room
  const room = await findOneById("room", roomId);
  if (!room || room.user_id != authenticatedUser.user_id) {
    return sendResponse(res, "INVALID_ROOM", {});
  }

  if (typeof room.user_used_players === "string")
    room.user_used_players = JSON.parse(room.user_used_players);
  if (typeof room.opponent_used_players === "string")
    room.opponent_used_players = JSON.parse(room.opponent_used_players);

  //Get opponent Active Card
  const opponentCard = room.opponent_cards[room.opponent_active_index];

  const opponentSelectedAttributeValue =
    opponentCard[global.CARD_INDEX[selectedAttributeIndex]];

  //Compare user attribute and opponent attribute
  if (
    selectedAttributeIndex === global.RANK_INDEX &&
    selectedAttributeValue <= opponentSelectedAttributeValue
  ) {
    room.user_wins_count += 1;
  } else if (selectedAttributeValue >= opponentSelectedAttributeValue) {
    room.user_wins_count += 1;
  }

  //Update used cards index
  if (room.user_used_players)
    room.user_used_players.push(room.user_active_index);
  else room.user_used_players = [room.user_active_index];

  if (room.opponent_used_players)
    room.opponent_used_players.push(room.opponent_active_index);
  else room.opponent_used_players = [room.opponent_active_index];

  //Check game finished or not based on remaining card
  if (room.user_used_players?.length === room.user_cards.length) {
    if (room.user_wins_count > Math.floor(room.user_cards.length / 2)) {
      isGameWon = 1;

      //update reward points to user
      await updateOne("user", authenticatedUser.user_id, {
        points: authenticatedUser.points + global.ROOM_REWARD,
      });

      //get reward card and add to user
      room.rewardCard =
        global.REWARD_CARDS[
          Math.floor(Math.random() * global.REWARD_CARDS.length)
        ];
      await insertOne("card", {
        user_id: authenticatedUser.user_id,
        master_card_id: room.rewardCard.rank,
        created_at: new Date(),
      });
    }
    //close room
    room.status = 0;
  } else {
    //get random index from available index of players
    let userAvailableIndex = [];
    for (let i = 0; i < room.user_cards.length; i++) {
      if (
        !room.user_used_players ||
        (room.user_used_players && room.user_used_players.indexOf(i) === -1)
      ) {
        userAvailableIndex.push(i);
      }
    }
    room.user_active_index =
      userAvailableIndex[Math.floor(Math.random() * userAvailableIndex.length)];

    let opponentAvailableIndex = [];
    for (let i = 0; i < room.user_cards.length; i++) {
      if (
        !room.opponent_used_players ||
        (room.opponent_used_players &&
          room.opponent_used_players.indexOf(i) === -1)
      ) {
        opponentAvailableIndex.push(i);
      }
    }
    room.opponent_active_index =
      opponentAvailableIndex[
        Math.floor(Math.random() * opponentAvailableIndex.length)
      ];
  }

  //update updated room data
  await updateOne("room", room.room_id, {
    user_wins_count: room.user_wins_count,
    opponent_used_players: room.opponent_used_players,
    user_used_players: room.user_used_players,
    user_active_index: room.user_active_index,
    opponent_active_index: room.opponent_active_index,
    status: room.status,
    reward_card: room.rewardCard ? room.rewardCard : "",
  });

  return sendResponse(res, "SUCCESS", {
    remainingCards: room.user_cards.length - room.user_used_players?.length,
    activePlayer: room.user_cards[room.user_active_index],
    isGameWon,
    reward: room.rewardCard,
    opponentCard: opponentCard,
    resultPoints: room.user_wins_count + "/" + room.user_cards.length,
  });
};
