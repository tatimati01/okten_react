import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.service";
import {useLocation} from "react-router-dom";

const UsersPost = () => {
    let {state} = useLocation();
    console.log(state);
    let [posts,setPosts] = useState();

    useEffect(()=> {
        postsService.getAll().then(value => setPosts(value))

    })
    return (
        <div>
            Users posts
            {posts.map(post=>
                <div>
                    {post.id} - {post.body}
            </div>)}
        </div>
    );
};

export default UsersPost;