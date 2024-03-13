import axios from "axios";
import { clearLS, getFromLS } from "../utils/localStorage";

export const url = "https://6f48-213-230-107-47.ngrok-free.app/storage/"

export const instance = axios.create({
    baseURL: "https://6f48-213-230-107-47.ngrok-free.app/api/",
    headers: {
        "Content-Type": "application/json", 
    },
})


instance.interceptors.request.use(
    (config) => {
        // const token = getFromLS("a-token");
        // // console.log(config);
        // if (token) {
        //     config.headers.authorization = `Bearer ${token}`;
        //     // console.log(token);
        // }
        return config; 
    },
    (error) => {
        console.log("error");
        return Promise.reject(error);
    }
);