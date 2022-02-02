import {useReducer} from "react";

import reducer from './helpers/reduсer'
import Form from "./components/Form/Form";
import Dogs from "./components/Dogs/Dogs";
import Cats from "./components/Cats/Cats";
import css from './App.module.css'

function App() {

  let [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

  let {cats, dogs} = state;

  return (
    <div>
      <Form dispatch={dispatch}/>
      <div className={css.petsContainer}>
        <Cats cats={cats} dispatch={dispatch}/>
        <Dogs dogs={dogs} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default App;
