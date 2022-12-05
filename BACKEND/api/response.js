module.exports.sendResponse = (res, type, data) => {
  return res.send(getResponseData(type, data));
};

const getResponseData = (type, data = {}) => {
  switch (type) {
    case "SUCCESS":
      return {
        responseCode: 200,
        responseMessage: "SUCCESS",
        responseData: data,
      };
    case "FAILED":
      return {
        responseCode: 201,
        responseMessage: "FAILED",
        responseData: data,
      };
    case "AUTH_ERROR":
      return {
        responseCode: 203,
        responseMessage: "AUTH_ERROR",
        responseData: data,
      };

    //USER JOINUS RELATED - 1000
    case "USER_NOT_FOUND":
      return {
        responseCode: 1001,
        responseMessage: "User not found",
        responseData: data,
      };
    case "INVALID_EMAIL":
      return {
        responseCode: 1002,
        responseMessage: "Invalid email provided",
        responseData: data,
      };
    case "DUPLICATE_EMAIL":
      return {
        responseCode: 1003,
        responseMessage: "Already registered to the Game",
        responseData: data,
      };
    case "INPUTS_MISSING":
      return {
        responseCode: 1004,
        responseMessage: "Please fill all the fields",
        responseData: data,
      };

    //INITIATE GAME - 2000
    case "OPPONENT_NOT_FOUND":
      return {
        responseCode: 2001,
        responseMessage: "Opponent not found",
        responseData: data,
      };
    case "INSUFFICIENT_POINTS":
      return {
        responseCode: 2002,
        responseMessage: "You don't have sufficient points to start the Game",
        responseData: data,
      };

    //BET CARDS - 3000
    case "INVALID_ROOM":
      return {
        responseCode: 3001,
        responseMessage: "Invalid room",
        responseData: data,
      };
  }
};
