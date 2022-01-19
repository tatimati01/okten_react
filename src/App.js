import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    }
    const getUserId = (id) => {
        setUserId(id)
    }

    return (
        <div className='wrap'>
            <div className='topBlocks'>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>

    );
}

export default App;
