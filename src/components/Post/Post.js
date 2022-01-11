import React from 'react';

const Post = (props) => {
    const {id,title,body} = props;
    return (
        <div className='stylePost'>
            <h4>Post id: {id}</h4>
            <h3>Title: {title}</h3>
            <h4>{body}</h4>
        </div>
    );
};

export default Post;