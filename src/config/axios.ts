import axios from 'axios';

// const BASE_URL = "http://localhost:4000/apis";
const BASE_URL = 'https://backend-prod.epns.io/apis';

/**
 * A function used to make get requests throughout the entire application
 * @param {String} path e.g /feeds/get_feeds, this represents the route of the enpoint to call
 * @returns {Promise}
 */
export const getReq = async (path: string) => {
  try {
    const response = await axios.get(BASE_URL + path);
    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * A function used to make post requests to the backend
 * @param {String} path e.g /feeds/get_feeds, this represents the route of the enpoint to call
 * @param {Object} obj
 * @returns {Promise}
 */
export const postReq = async (path: string, obj: any) => {
  try {
    const response = await axios.post(BASE_URL + path, obj, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
