import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";


function App() {


    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <Content/>

                <Routes>
                    <Route path={'/users'}>
                        <Route>

                        </Route>
                    </Route>
                    <Route path={'/posts'}>

                    </Route>
                </Routes>

            </div>
        </div>
    );
}

export default App;
