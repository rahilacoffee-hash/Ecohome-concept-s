import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setSession = (accessToken, admin) => {
    localStorage.setItem("accessToken", accessToken);
    setUser(admin);
  };

  const refreshSession = async () => {
    const { data } = await axiosInstance.post("/auth/refresh");
    localStorage.setItem("accessToken", data.data.accessToken);
    const current = await axiosInstance.get("/auth/me");
    setUser(current.data.data.admin);
  };

  useEffect(() => {
    refreshSession().catch(() => localStorage.removeItem("accessToken")).finally(() => setIsLoading(false));
  }, []);

  const login = async (credentials) => {
    const { data } = await axiosInstance.post("/auth/login", credentials);
    setSession(data.data.accessToken, data.data.admin);
    return data.data.admin;
  };

  const logout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("adminAccessToken");
      setUser(null);
    }
  };

  return <AuthContext.Provider value={{ user, isLoading, login, logout, refreshSession }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
