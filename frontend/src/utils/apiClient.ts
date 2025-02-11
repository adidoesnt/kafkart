import axios from "axios";
import { PRODUCT_API_BASE_URL, USER_API_BASE_URL } from "./constants";

export const userApiClient = axios.create({
	baseURL: USER_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const productApiClient = axios.create({
	baseURL: PRODUCT_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
