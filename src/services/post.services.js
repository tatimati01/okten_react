import {axiosService} from "./axios.service";
import {urls} from "../components/configs/urls";

export const postService = {
    getUByUserId:(id)=>axiosService.get(`${urls.posts}/${id}`)
}