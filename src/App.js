import React, {useEffect, useState} from 'react';

const App = () => {
    const [launchesList, setLaunchesList] = useState();
    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(launches => {
                setLaunchesList(launches.filter(mission => mission.launch_year !== '2020'));
            });
    },[]);
    return (
        <div>
            {
                launchesList.map(value => <div key={value.flight_number}>
                    {value.mission_name} ({value.launch_year} year)
                    <img src={value.links.mission_patch_small} alt={value.mission_name}/>

                </div>)
            };

        </div>
    );
};

export default App;