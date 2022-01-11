import React from 'react';

const Comment = (props) => {
    const {id,name,email,body} = props;
    return (
        <div className='styleComment'>
            <h4>Comment id: {id}</h4>
            <h3>{name} ({email})</h3>
            <h3>{body}</h3>
        </div>
    );
};

export default Comment;