import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"/api/search/v4/",
    headers:{
        "Content-Type":"application/json"
    },
    timeout:5000
})
