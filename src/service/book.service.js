import { api } from "./baseURl";

export const getBook = async (arg) => {
    try {
        const {data} = await api.get(arg);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}