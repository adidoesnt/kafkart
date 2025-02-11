import axios from "axios";
import { USER_API_BASE_URL } from "./constants";

export const userApiClient = axios.create({
	baseURL: USER_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
