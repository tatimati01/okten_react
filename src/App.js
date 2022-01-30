import {useReducer} from "react";

import reducer from '../src/helpers/reduser'
import Form from "./components/Form/Form";
import Dogs from "./components/Dogs/Dogs";
import Cats from "./components/Cats/Cats";
import css from './App.module.css'

function App() {

  let [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

  return (
    <div>
      <Form dispatch={dispatch}/>
      <div className={css.petsContainer}>
        <Cats state={state}/>
        <Dogs state={state}/>
      </div>
    </div>
  );
}

export default App;
