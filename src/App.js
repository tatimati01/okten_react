import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import css from './App.module.css';
import {useState} from "react";

function App() {

    const [car, setCar] = useState(null);

    const [updateCar, setUpdateCar] = useState({});

    return (
        <div className={css.mainWrapper}>
            <Cars car={car} update={setCar} setUpdateCar={setUpdateCar}/>
            <Form update={setCar} updateCar={updateCar}/>
        </div>
    );
}

export default App;
