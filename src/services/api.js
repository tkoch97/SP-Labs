import axios from 'axios';

export const api = axios.create({
  baseURL: "https://sp-labs.vercel.app/api/"
});