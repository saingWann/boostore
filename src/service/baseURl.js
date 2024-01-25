import axio from "axios";
import { API_URL } from "../lib/constant";

export const api = axio.create({
    baseURL: API_URL,
})