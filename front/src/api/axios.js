import axios from "axios";

const instance = axios.create({
    baseURL: "https://authcard.onrender.com/api",
    withCredentials: true
});

export default instance;
