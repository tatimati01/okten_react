import React, {useEffect, useState} from 'react';
import {useLocation, useParams, NavLink, Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import css from '../../App.module.css'

const UserDetails = () => {
    let {id} = useParams();
    let [user, setUser] = useState(null);
    let {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
        } else {
            usersService.getUserById(id).then(user => setUser({...user}))
        }
    }, [id, state, user])

    return (
        <div>
            {user && (
                <div className={css.userDetails}>
                    <h2>{user.id} - {user.name} ({user.username})</h2>
                    <ul>Contacts
                        <li>Email: {user.email}</li>
                        <li>Phone number: {user.phone}</li>
                        <li>Website: {user.website}</li>
                        <li>Address: {user.address.city}, {user.address.street}, {user.address.suite}</li>
                        <li>Company: {user.company.name}</li>
                    </ul>
                    <button className={css.btnDetails} onClick={(e)=>e.preventDefault()}>
                        <NavLink to={`posts`}>Show posts</NavLink>
                    </button>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export default UserDetails;