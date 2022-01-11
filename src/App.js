import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
  return (
      <div>
          <div className='topBoxes'>
              <div className='styleUsersBox'>
                  <Users/>
              </div>
              <div className='stylePostsBox'>
                  <Posts/>
              </div>
          </div>
          <div className='commentsBox'>
              <div>
                  <Comments/>
              </div>
          </div>
      </div>
  );
}

export default App;
