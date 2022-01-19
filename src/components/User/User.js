import React from 'react';
import './User.css';

const User = ({user,getUser}) => {
    const {name, username} = user;

    return (
        <div className='styleUser'>
            <h3>{name} ({username})</h3>
            <button className='btnDetails' onClick={()=>getUser(user)}>Show details</button>
        </div>
    )
};

export default User;