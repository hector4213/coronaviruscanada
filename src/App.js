import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Today from './Today';
import Trends from './Trends';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
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
