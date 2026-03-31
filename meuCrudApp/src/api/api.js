import axios from "axios";

const api = axios.create({
    baseURL: "http://dwwoi-201-82-232-186.a.free.pinggy.link",
});

export default api;