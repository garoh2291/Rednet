import axios from "axios";

console.log(process.env.NEXT_PUBLIC_API_URL);
export const $apiClient = axios.create({
  baseURL: "https://dev.rednet.am/api/v1",
  withCredentials: true,
});

// get token from cookie and add to request headers for authenticated routes

$apiClient.interceptors.request.use(
  (config) => {
    const token = window?.localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$apiClient.interceptors.response.use(
  (res: any) => res,
  async (error: any) => {
    if (error.response?.status === 401) {
      console.log("unauthorized");
    }
    return Promise.reject(error);
  }
);
