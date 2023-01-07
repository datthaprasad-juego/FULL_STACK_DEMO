import constants from "../Constants";

const axios = require("axios");

const fetch = async (url, method, body, token) => {
  try {
    const response = await axios(url, {
      method,
      data: body,
      headers: { access_token: token },
    });
    console.log({ response });
    if (
      response.data &&
      response.data.responseCode === constants.RESPONSE_CODE.SUCCESS
    ) {
      return { data: response.data.responseData, error: null };
    } else if (response.data) {
      return { data: {}, error: response.data.responseMessage };
    } else return { data: response.data, error: "Something went wrong!..." };
  } catch (error) {
    return { data: null, error: "Server under maintainance!..." };
  }
};
export default fetch;
