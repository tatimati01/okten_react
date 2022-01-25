import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {albumsService} from "../../services/albums.service";

const Albums = () => {
    let location = useLocation();
    console.log(location);
    let [albums, setAlbums] = useState();

    // useEffect(()=> {
    //     albumsService.getAllAlbums().then(value => console.log(setAlbums(value)))
    // })

    // useEffect((userId)=> {
    //     albumsService.getAlbumByUserId(userId).then(value => console.log(setAlbums(value)))
    // },[userId])

    return (
        <div>
            Albums
        </div>
    );
};

export default Albums;