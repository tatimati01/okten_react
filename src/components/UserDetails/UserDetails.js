import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";

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
    },[id,state])

    return (
        <div>
            {user && (
                <div>
                    {user.id}
                </div>
            )}
        </div>
    );
};

export default UserDetails;