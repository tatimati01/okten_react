import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.service";
import css from '../../App.module.css'


const Posts = () => {
    let [posts,setPosts] = useState([]);

    useEffect(()=> {
        postsService.getAll().then(value => setPosts(value))
    },[])

    const postDetails = (e) => {
      e.preventDefault();

    }

    return (
        <div className={css.postsContainer}>
            <h1>Posts</h1>
            {posts.map(post =>
                <div key={post.id} className={css.postItem}>
                    <h3>{post.id} - {post.title}</h3>
                    <div className={css.bodyContainer}>
                        <p>{post.body}</p>
                        <button className={css.btnDetails} onClick={postDetails}>Show details</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Posts;