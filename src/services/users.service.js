import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const usersService = {
    getAll: ()=>axiosService.get(urls.users).then(value => value.data),
    getUserById: (id)=>axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUsersPosts: (id)=>axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}