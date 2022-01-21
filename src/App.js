import './App.css';
import FilterForm from "./components/FilterForm/FilterForm";
import {useEffect, useState} from "react";
import {usersService} from "./services/users.service";
import Users from "./components/Users/Users";


function App() {
    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => {
            setUsers([...value])
            setFiltered([...value])
        });
    }, [])

    const getFilter = (data) => {
        let filterArray = [...users];

        if (data.name) {
            filterArray = filterArray.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.username) {
            filterArray = filterArray.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if (data.email) {
            filterArray = filterArray.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setFiltered(filterArray)
    }

    return (
        <div>
            <FilterForm getFilter={getFilter}/>
            <Users users={filtered}/>
        </div>
    );
}

export default App;
