import {useReducer} from "react";

function App() {

  let [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

  return (
    <div>

    </div>
  );
}

export default App;
