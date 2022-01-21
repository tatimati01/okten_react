import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import css from './App.module.css';

function App() {



    return (
        <div className={css.mainWrapper}>
            <Cars/>
            <Form/>
        </div>
    );
}

export default App;
