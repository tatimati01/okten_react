import axios from "axios";
import baseUrl from "../configs/urls";

let axiosService = axios.create({
    baseURL: baseUrl
});

export default axiosService