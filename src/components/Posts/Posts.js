import {useEffect, useState} from 'react';

import Post from "../Post/Post";

const Posts = () => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPostList(posts))
    },[]);
    return (
        <div className='stylePostBox'>
            {postList.map(post => <Post key={post.id} title={post.title} body={post.body}/>)}
        </div>
    );
};

export default Posts;