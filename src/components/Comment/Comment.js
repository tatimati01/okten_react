import React from 'react';

const Comment = (props) => {
    const {name,email,body} = props;
    return (
        <div className='styleComment'>
            <h3>{name} ({email})</h3>
            <h3>{body}</h3>
        </div>
    );
};

export default Comment;