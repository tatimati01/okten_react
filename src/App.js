import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
    const [launchesList, setLaunchesList] = useState([]);
    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(launches => {
                setLaunchesList(launches.filter(mission => mission.launch_year !== '2020'));
            });
    },[]);
    return (
        <div className='mainBox'>
            {
                launchesList.map(value => <div key={value.flight_number} className='launchStyle'>
                    <h1>{value.mission_name} ({value.launch_year} year)</h1>
                    <img src={value.links.mission_patch_small} alt={value.mission_name}/>

                </div>)
            };

        </div>
    );
};

export default App;