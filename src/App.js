import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";


function App() {


    return (
        <div>
            <div>
                <HomePage/>
            </div>
            <div>

                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
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
