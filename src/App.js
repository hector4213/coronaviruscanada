import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVersionDate } from './redux/ducks/infoSlice';
import { setTodayDate } from './redux/ducks/summarySlice';
import Nav from './components/Nav';
import Home from './Home';
import Today from './Today';
import Trends from './Trends';

const App = () => {
  const dispatch = useDispatch();
  const { apiLastUpdated } = useSelector((state) => state.appData);

  useEffect(() => {
    if (!apiLastUpdated) {
      dispatch(getVersionDate());
    } else {
      dispatch(setTodayDate(apiLastUpdated));
    }
  }, [apiLastUpdated]);

  return (
    <div className="h-full">
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
