import apiClient from "./ApiClient";

export const getProductCategories = async () => {
  try {
    const response = await apiClient.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);

    throw error;
  }
};
