import {useEffect, useState} from "react";
import User from "../User/User";

const Users = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUserList(users))
    }, []);
    return (
        <div>
            {userList.map(user =>
                <User
                    id={user.id} name={user.name} username={user.username} email={user.email}
                    phone={user.phone} website={user.website} company={user.company.name}
                />)}
        </div>
    );
};

export default Users;