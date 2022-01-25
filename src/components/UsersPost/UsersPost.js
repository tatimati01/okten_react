import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.service";

const UsersPost = () => {
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