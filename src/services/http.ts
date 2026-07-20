import axios from "axios";

export const _baseURL = "https://carlotteryapi.saipacorp.com/api";

export const http = axios.create({
    baseURL: _baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});
