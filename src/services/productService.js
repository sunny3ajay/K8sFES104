import axios from "axios";

const API_BASE_URL = "http://backend:8080/back1/products";

export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(
      category ? `${API_BASE_URL}/${category}` : API_BASE_URL
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductImageUrl = (imagePath) => {
  return `http://backend:8080/back1/products/images/${imagePath}`;
};
