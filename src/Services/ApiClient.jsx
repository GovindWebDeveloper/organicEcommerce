import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Set timeout to 10 seconds
});

// Add an interceptor to handle errors globally (optional)
apiClient.interceptors.response.use(
  (response) => response, // If response is successful, return it
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error); // Pass the error to the calling function
  }
);

export default apiClient;
