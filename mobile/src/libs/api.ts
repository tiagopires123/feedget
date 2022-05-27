import axios from "axios";

export const api = axios.create({
  baseURL: 'http://189.0.80.32:3333'
});