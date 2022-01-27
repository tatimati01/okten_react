import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import css from '../../App.module.css'

const Photos = () => {
    let {state} = useLocation();
    let albumId = state.album.id;

    let [photos,setPhotos] = useState([]);

    useEffect(()=> {
        albumsService.getPhotosByAlbumId(albumId).then(value => setPhotos([...value]))
    },[albumId])

    return (
        <div className={css.photosContainer}>
            {photos.map(photo => 
                <div key={photo.id} className={css.photoItem}>
                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                    <h4>Album: {photo.albumId}. {photo.title}</h4>
                </div>
            )}
        </div>
    );
};

export default Photos;