import axios from "axios";

const API_URL = "http://localhost:9999";

axios.defaults.withCredentials = true; // Important for cookies

export const signin = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/signin`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/signup`, userData);
  return response.data;
};

export const logout = async () => {
  const response = await axios.get(`${API_URL}/api/auth/signout`);
  return response.data;
};

export const getUser = async () => {
  const response = await axios.get(`${API_URL}/api/auth/profile`);
  return response.data;
};
