import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import css from '../../App.module.css'

const PostsComments = () => {
    let {id} = useParams();

    let [comments,setComments] = useState([]);

    useEffect(()=> {
            commentsService.getCommentsOfPost(id).then(value => setComments(value))
    },[id])

    return (
        <div>
            {comments.map(comment =>
                <div key={comment.id} className={css.commentItem}>
                    <h4>Post Id: {comment.postId}</h4>
                    <h3>{comment.name} ({comment.email})</h3>
                    <h4>{comment.body}</h4>
                </div>
            )}
        </div>
    );
};

export default PostsComments;