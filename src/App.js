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
import NavBar from './components/NavBar/NavBar';
import Statistics from './components/Statistics/FetchStatistics';
import Legal from './components/Legal/Legal';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={MainPage}></Route>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/stats" component={Statistics}></Route>
        <Route exact path="/legal" component={Legal}></Route>
        {/* <Route exact path="/animation" component={Animation}></Route> */}
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
