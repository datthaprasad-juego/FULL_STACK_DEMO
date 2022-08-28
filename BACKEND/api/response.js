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
    case "DUPLICATE_EMAIL":
      return {
        responseCode: 202,
        responseMessage: "DUPLICATE_EMAIL",
        responseData: data,
      };
    case "AUTH_ERROR":
      return {
        responseCode: 203,
        responseMessage: "AUTH_ERROR",
        responseData: data,
      };
    case "INSUFFICIENT_POINTS":
      return {
        responseCode: 204,
        responseMessage: "INSUFFICIENT_POINTS",
        responseData: data,
      };
  }
};
