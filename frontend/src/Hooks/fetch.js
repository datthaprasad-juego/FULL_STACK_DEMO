const axios = require("axios");

const fetch = async (url, method, body) => {
  try {
    const response = await axios(url, { method, data: body });
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
export default fetch;
