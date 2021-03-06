import React from 'react';

const User = (props) => {
    const {name, username, email, phone, website, company} = props;
    return (
        <div className='styleUser'>
            <h3>{name} ({username})</h3>
            <h4>Contacts: email - {email}, phone number - {phone}, website - {website}. </h4>
            <h4>Company - "{company}".</h4>
        </div>
    )
};

export default User;