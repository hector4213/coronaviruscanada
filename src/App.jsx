import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Local dependencies
import { getVersionDate } from './redux/ducks/infoSlice';
import { setTodayDate } from './redux/ducks/summarySlice';
import Nav from './components/Nav';
import Home from './views/Home';
import Today from './views/Today';
import Trends from './views/Trends';
import SignUp from './views/SignUp';
import Login from './views/Login';
import FindVaccine from './views/FindVaccine';
import { useAuthSubscription } from './firebase/useAuthSubscription';

const App = () => {
  const dispatch = useDispatch();
  const { apiLastUpdated } = useSelector((state) => state.appData);
  const { user } = useSelector((state) => state.user);

  useAuthSubscription();

  useEffect(() => {
    if (!apiLastUpdated) {
      dispatch(getVersionDate());
    } else {
      dispatch(setTodayDate(apiLastUpdated));
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/today">
              <Today />
            </Route>
            <Route exact path="/trends">
              <Trends />
            </Route>
            <Route exact path="/findvaccine">
              <FindVaccine />
            </Route>
            <Route
              exact
              path="/login"
              render={() => (user ? <Redirect to="/" /> : <Login />)}
            />
            <Route
              exact
              path="/signup"
              render={() => (user ? <Redirect to="/" /> : <SignUp />)}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
