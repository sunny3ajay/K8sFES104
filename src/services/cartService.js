import axios from "axios";

const API_BASE = "http://backend:8080/back1/cart";

export const addToCart = async (userId, productId) => {
  return await axios.post(`${API_BASE}/add`, {
    userId,
    productId,
    quantity: 1
  });
};

export const getCartItems = async (userId) => {
  const response = await axios.get(`${API_BASE}/user/${userId}`);
  return response.data;
};

export const clearCart = async (userId) => {
  return await axios.delete(`${API_BASE}/clear/${userId}`);
};

export const removeCartItem = async (cartItemId) => {
  return axios.delete(`${API_BASE}/remove/${cartItemId}`);
};
