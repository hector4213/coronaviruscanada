import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVersionDate } from './redux/ducks/infoSlice';
import { setTodayDate } from './redux/ducks/summarySlice';
import Nav from './components/Nav';
import Home from './views/Home';
import Today from './views/Today';
import Trends from './views/Trends';
import SignUp from './views/SignUp';
import Login from './views/Login';
import FindVaccine from './views/FindVaccine';

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
    <div className="min-h-screen">
      <Router>
        <Nav />
        <main>
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
            <Route path="/findvaccine">
              <FindVaccine />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
