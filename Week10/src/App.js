import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostFetch from './PostFetch';
import Page3 from './Page3';
import './week09.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="page1">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/newPost">
              <NewPost />
            </Route>
            <Route exact path='/Page3'>
              <Page3 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    //<PostFetch />
  );
}

export default App;
