import {urls} from "../components/configs/urls";
import {axiosService} from "./axios.service";

export const userService = {
    getAll:()=>axiosService.get(urls.users).then(value => value.data)
}