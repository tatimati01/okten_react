import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import css from '../../App.module.css'

const UsersPost = () => {
    let {id} = useParams();
    let [posts,setPosts] = useState([]);

    useEffect(()=> {
        postsService.getPostsByUserId(id).then(value => setPosts(value))
    },[id])

    return (
        <div>
            {posts.map(post =>
                <div key={post.id} className={css.commentItem}>
                    <h3>User id: {post.userId}. Title: {post.title}</h3>
                    <h4>{post.body}</h4>
                </div>
            )}

        </div>
    );
};

export default UsersPost;