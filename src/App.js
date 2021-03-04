import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchVersionDate } from './redux/ducks/info';
import './App.css';
import Nav from './components/Nav';
import Home from './Home';
import Today from './Today';
import Trends from './Trends';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVersionDate());
  }, []);

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/today">
            <Today />
          </Route>
          <Route path="/trends">
            <Trends />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
