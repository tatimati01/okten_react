import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import css from '../../App.module.css'

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className={css.userPage}>
            <div className={css.userContainer}>
                <h1>Users</h1>
                {users.map(user =>
                    <div key={user.id} className={css.userItem}>
                        <h3>{user.id} - {user.name} ({user.username})</h3>
                        <div className={css.btnBox}>
                            <button className={css.btnDetails} onClick={(e)=>e.preventDefault()}>
                                <NavLink to={user.id.toString()} state={user}>Show details</NavLink>
                            </button>
                            <button className={css.btnAlbums} onClick={(e)=>e.preventDefault()}>
                                <NavLink to={`${user.id.toString()}/albums`}>Show albums</NavLink>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default Users;