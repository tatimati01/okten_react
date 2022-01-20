import React from 'react';

import './Post.css';

const Post = ({post}) => {
    console.log(post);
    const {id, title, body} = post;

    return (
        <div className='stylePost'>
            <h2>{id} - {title}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default Post;