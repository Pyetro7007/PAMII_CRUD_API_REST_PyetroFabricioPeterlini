import axios from "axios";

const api = axios.create({
    baseURL: "http://pyite-200-204-33-222.a.free.pinggy.link",
});

export default api;