import axios from "axios";

const API_URL = "http://localhost:9999/api/product";

axios.defaults.withCredentials = true; // Important for cookies

export const createNewProduct = async (productData) => {
  const response = await axios.post(`${API_URL}/new`, productData);
  return response.data;
};

export const updateProduct = async (productData, productID) => {
  const response = await axios.put(
    `${API_URL}/update/${productID}`,
    productData
  );
  return response.data;
};

export const deleteProduct = async (productID) => {
  const response = await axios.delete(`${API_URL}/delete/${productID}`);
  return response.data;
};

export const getAllProduct = async () => {
  const response = await axios.get(`${API_URL}/get`);
  return response.data;
};

export const getProduct = async (productID) => {
  const response = await axios.get(`${API_URL}/get/${productID}`);
  return response.data;
};

export const getDeletedProduct = async () => {
  const response = await axios.get(`${API_URL}/deleted`);
  return response.data;
};
