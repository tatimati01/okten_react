import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";

const Users = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsersList(users));
    }, [])

    return (
        <div className='usersBlock'>
            {usersList.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;