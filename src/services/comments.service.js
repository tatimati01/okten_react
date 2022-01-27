import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentsService = {
    getCommentsOfPost: (postId)=>axiosService.get(`${urls.posts}/${postId}/comments`)
        .then(value => value.data),
    getAllComments: ()=>axiosService.get(urls.comments).then(value => value.data)
}