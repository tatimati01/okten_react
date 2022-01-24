import React, {useEffect, useState} from 'react';

import {usersService} from "../../services/users.service";
import css from '../../App.module.css'

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))
    }, [])

    const userDetails = (e) => {
      e.preventDefault();
    }

    const userAlbums = (e) => {
      e.preventDefault();
    }
    return (
        <div className={css.userContainer}>
            <h1>Users</h1>
            {users.map(user =>
                <div key={user.id} className={css.userItem}>
                    <h3>{user.id} - {user.name} ({user.username})</h3>
                    <div className={css.btnBox}>
                        <button className={css.btnDetails} onClick={userDetails}>Show details</button>
                        <button className={css.btnAlbums} onClick={userAlbums}>Show albums</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;