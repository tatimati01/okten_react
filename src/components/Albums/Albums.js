import React, {useEffect, useState} from 'react';
import {NavLink, Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import css from '../../App.module.css'

const Albums = () => {
    let {id} = useParams();
    let [albums, setAlbums] = useState([]);


    useEffect(()=> {
        albumsService.getAlbumByUserId(id).then(value => setAlbums(value))
    },[id])
    return (
        <div className={css.albumsContainer}>
            {albums.map(album =>
                <div key={album.id} className={css.userItem}>
                    <h3>Album {album.id}. Title: "{album.title}"</h3>
                    <button className={css.btnAlbums} onClick={(e)=>e.preventDefault()}>
                        <NavLink to={`${album.id}/photos`} state={{album}}>Show photos</NavLink>
                    </button>
                </div>
            )}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Albums;