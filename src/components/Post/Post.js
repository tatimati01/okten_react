import React from 'react';

const Post = ({posts}) => {
    const {id, title, body} = posts;

    return (
        <div className='stylePost'>
            <h2>{id} - {title}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default Post;