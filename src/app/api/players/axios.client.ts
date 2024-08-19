import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: process.env.NEXT_PLAYERS_API_BASE_URL,
});

AxiosClient.interceptors.request.use((config) => {
  const API_KEY = process.env.NEXT_PLAYERS_API_KEY;
  config.url = `${config.url}&APIkey=${API_KEY}`;
  return config;
});
