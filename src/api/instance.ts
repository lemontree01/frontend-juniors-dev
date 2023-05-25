import axios, { AxiosInstance} from "axios";

export const SERVER_URL = process.env.SERVER_URL ?? "http://34.18.47.54:8000/";

const $serverApi: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000
});

export default $serverApi;