import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet, NavLink} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import css from '../../App.module.css'

const PostDetails = () => {
    let {id} = useParams();
    let {state} = useLocation();
    let [post,setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
        } else {
            postsService.getPostById(id).then(post => setPost({...post}))
        }
    },[id, state, post])
    return (
        <div>
            {post && (
                <div className={css.postDetails}>
                    <h4>Post id: {post.id}</h4>
                    <h3>{post.body}</h3>
                    <button onClick={(e)=>e.preventDefault()} className={css.btnAlbums}>
                        <NavLink to={'comments'}>Comments</NavLink>
                    </button>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export default PostDetails;