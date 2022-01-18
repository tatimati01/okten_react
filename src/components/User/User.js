import React from 'react';

const User = (user) => {
    const {name, username} = user;
    // console.log(user);
    return (
        <div className='styleUser'>
            <h3>{name} ({username})</h3>
            <button>Show details</button>
        </div>
    )
};

export default User;