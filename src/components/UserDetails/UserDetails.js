import React from 'react';

import './UserDetails.css';

const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className='detailsBox'>
            <h1>{id}. {name} ({username})</h1>
            <h3>CONTACTS
                <ul>
                    <li>Email: {email}</li>
                    <li>City: {address.city}</li>
                    <li>Phone number: {phone}</li>
                    <li>Website: {website}</li>
                    <li>Company: {company.name}</li>
                </ul>
            </h3>
            <button className='btnPosts' onClick={getUserId(id)}>Get posts</button>
        </div>
    );
};

export default UserDetails;