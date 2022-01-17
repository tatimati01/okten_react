import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/User/User";
import Posts from "./components/Posts/Posts";

function App() {
  return (
      <div className='wrap'>
          <div className='topBlocks'>
              <Users/>
              <UserDetails/>
          </div>
          <Posts/>
      </div>

  );
}

export default App;
