import {useReducer} from "react";

import reducer from '../src/helpers/reduser'
import Form from "./components/Form/Form";
import Dogs from "./components/Dogs/Dogs";
import Cats from "./components/Cats/Cats";

function App() {

  let [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

  return (
    <div>
      <Form/>
      <div>
        <Cats/>
        <Dogs/>
      </div>
    </div>
  );
}

export default App;
