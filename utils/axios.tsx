import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// export const postData = (data) => axiosInstance.post('/auth/login',data);
