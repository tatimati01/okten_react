import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsService = {
    getAlbumByUserId: (userId)=>axiosService.get(`${urls.users}/${userId}/albums`).then(value => value.data),
    getPhotosByAlbumId: (albumId)=>axiosService.get(`${urls}/albums/${albumId}/photos`)
        .then(value => value.data)
}