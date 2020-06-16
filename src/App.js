import React, { useState, useEffect } from 'react';
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
import Animation from './components/Animation/Animation';
import { WeatherProvider } from './components/WeatherContext/WeatherContext';

function App() {
  const [firstTime, setFirstTime] = useState(
    !sessionStorage.getItem('firstTime')
  );

  useEffect(() => {
    if (firstTime) {
      sessionStorage.setItem('firstTime', true);
    }
    setTimeout(() => {
      setFirstTime(false);
      sessionStorage.setItem('firstTime', false);
    }, 2000);
  }, []);
  return (
    <WeatherProvider>
      {firstTime ? (
        <Animation />
      ) : (
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/home" component={MainPage}></Route>
            <Route exact path="/" component={MainPage}></Route>
            {/* <Route exact path="/stats" component={Statistics}></Route> */}
            <Route exact path="/legal" component={Legal}></Route>
            {/* <Route exact path="/animation" component={Animation}></Route> */}
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      )}
    </WeatherProvider>
  );
}

export default App;
