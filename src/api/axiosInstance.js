import axios from "axios";

const configuredApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const baseURL = configuredApiUrl.replace(/\/api\/?$/, "") + "/api";

const axiosInstance = axios.create({ baseURL, withCredentials: true });

let refreshRequest = null;

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken") || localStorage.getItem("adminAccessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isRefreshRequest = originalRequest?.url?.includes("/auth/refresh");

    if (error.response?.status !== 401 || originalRequest?._retry || isRefreshRequest) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      refreshRequest ||= axiosInstance.post("/auth/refresh");
      const { data } = await refreshRequest;
      const accessToken = data.data.accessToken;

      localStorage.setItem("accessToken", accessToken);
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      return axiosInstance(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("adminAccessToken");
      return Promise.reject(refreshError);
    } finally {
      refreshRequest = null;
    }
  },
);

export default axiosInstance;
