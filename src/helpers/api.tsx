import { API_URL } from "../config/config";
import axios from "axios";
import i18n from "../i18/i18n";

export const $api = axios.create({
  baseURL: API_URL,
});

export const languageName = "nasiyaLanguage";

$api.defaults.headers.common["Accept"] = "application/json";

export const initApp = () => {};

// Language
$api.interceptors.request.use((config: any) => {
  config.headers["Accept-Language"] = i18n.language.toLowerCase();
  return config;
});

export const changeLanguage = (lng: string) => {
  localStorage.setItem(languageName, lng);
  i18n.changeLanguage(lng);
  $api.defaults.headers.common["Accept-Language"] = lng;
};
