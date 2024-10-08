import i18n from "../i18/i18n";

import axios from "axios";

export const $api = axios.create({
  baseURL: "http://api.selfeshop.uz",
});

$api.defaults.headers.common["Accept"] = "application/json";

const tokenName = "proboxToken";

export const initApp = () => {
  const token = localStorage.getItem(tokenName);
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const setToken = (token: any) => {
  localStorage.setItem(tokenName, token);
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem(tokenName);
  $api.defaults.headers.common.Authorization = ``;
};

// Language
$api.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = i18n.language.toLowerCase();
  return config;
});

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  localStorage.setItem("proboxLanguage", lng);
  $api.defaults.headers.common["Accept-Language"] = lng;
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("proboxToken");
  return token !== null;
};
