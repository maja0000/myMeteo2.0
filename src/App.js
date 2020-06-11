import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// components
import MainPage from './components/MainPage/MainPage';
// import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/home" component={MainPage}></Route>
        <Route exact path="/" component={MainPage}></Route>
        {/* <Route exact path="/stats" component={Stats}></Route> */}
        {/* <Route exact path="/legal" component={Legal}></Route> */}
        {/* <Route exact path="/animation" component={Animation}></Route> */}
        {/* <Route  path="*" component={NotFound}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
