import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";

const Comments = () => {
    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => setCommentList(comments))
    },[])
    return (
        <div className='commentsBox'>
            {commentList.map(comment =>
                <Comment id={comment.id} name={comment.name} email={comment.email} body={comment.body}/>
            )}
        </div>
    );
};

export default Comments;