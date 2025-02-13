import apiClient from "./ApiClient";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);

    throw error;
  }
};

// export const getJewelleryProducts = async () => {
//   try {
//     const response = await apiClient.get("/products/category/jewelery");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching jewelery:", error);

//     throw error;
//   }
// };

// export const getElectronicsProducts = async () => {
//   try {
//     const response = await apiClient.get("/products/category/electronics");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching jewelery:", error);

//     throw error;
//   }
// };

// export const getMensWearProducts = async () => {
//   try {
//     const response = await apiClient.get("/products/category/men's clothing");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching jewelery:", error);

//     throw error;
//   }
// };

// export const getWomensWearProducts = async () => {
//   try {
//     const response = await apiClient.get("/products/category/women's clothing");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching jewelery:", error);

//     throw error;
//   }
// };

export const getCartProduct = async () => {
  try {
    const response = await apiClient.get("/carts");
    return response.data;
  } catch (error) {
    console.error("Error fetching jewelery:", error);

    throw error;
  }
};

