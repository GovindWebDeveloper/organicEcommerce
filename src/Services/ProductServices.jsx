import apiClient from "./ApiClient";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data; // Return product data
  } catch (error) {
    console.error("Error fetching products:", error);

    // Rethrow the error so it can be handled in the component
    throw error;
  }
};

export const getfeaturedProducts = async () => {
  try {
    const response = await apiClient.get("/products/category/jewelery");
    return response.data; // Return product data
  } catch (error) {
    console.error("Error fetching jewelery:", error);

    // Rethrow the error so it can be handled in the component
    throw error;
  }
};

