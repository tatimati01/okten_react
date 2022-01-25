import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.service";
import css from '../../App.module.css'
import {Outlet, Link} from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";


const Posts = () => {
    let [posts,setPosts] = useState([]);

    useEffect(()=> {
        postsService.getAll().then(value => setPosts(value))
    },[])

    const postDetails = (e) => {
      e.preventDefault();
    }

    return (
        <div className={css.postsPage}>
            <div className={css.postsContainer}>
                <h1>Posts</h1>
                {posts.map(post =>
                    <div key={post.id} className={css.postItem}>
                        <h3>{post.id} - {post.title}</h3>
                        <div className={css.bodyContainer}>
                            <p>{post.body}</p>
                            <button className={css.btnDetails} onClick={postDetails}>
                                <Link to={post.id.toString()} state={{post}}>Show details</Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default Posts;