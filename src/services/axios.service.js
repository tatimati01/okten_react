import axios from "axios";

import baseUrl from "../components/configs/urls";

export const axiosService = axios.create({
    baseURL:baseUrl
});