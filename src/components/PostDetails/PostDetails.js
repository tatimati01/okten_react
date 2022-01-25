import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import css from '../../App.module.css'

const PostDetails = () => {
    let {id} = useParams();
    console.log(id);
    let {state} = useLocation();
    let [post,setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
            console.log(state);
        } else {
            postsService.getPostById(id).then(value => setPost({...post}))
        }
    },[id, state, post])
    return (
        <div>
            {post && (
                <div className={css.postDetails}>
                    <h3>{post.body}</h3>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export default PostDetails;