import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";

const Users = ({getUser}) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsersList(value))
    }, [])
    return (
        <div className='usersBlock'>
            {usersList.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;