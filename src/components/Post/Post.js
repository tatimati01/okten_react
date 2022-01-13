import React from 'react';

const Post = (props) => {
    const {title,body} = props;
    return (
        <div className='stylePost'>
            <h3>Title: {title}</h3>
            <h4>{body}</h4>
        </div>
    );
};

export default Post;