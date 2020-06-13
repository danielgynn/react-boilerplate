const hostname = process.env.NODE_ENV;
export const API_ROOT =
  hostname === "development" ? "http://localhost:5000/api" : "/api";

export const API = {};
