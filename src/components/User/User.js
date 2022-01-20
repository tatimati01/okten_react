import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;
    
    return (
        <div className={'userStyle'}>
            {id}. {name} ({username}). Email: {email}
        </div>
    );
};

export default User;