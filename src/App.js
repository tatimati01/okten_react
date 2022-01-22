import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import css from './App.module.css';
import {useState} from "react";

function App() {

    const [newCar, setNewCar] = useState(null);

    return (
        <div className={css.mainWrapper}>
            <Cars newCar={newCar}/>
            <Form setNewCar={setNewCar}/>
        </div>
    );
}

export default App;
