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
import UserDashboard from './views/UserDashboard';
import FindVaccine from './views/FindVaccine';
import { useAuthSubscription } from './firebase/useAuthSubscription';

const App = () => {
  const dispatch = useDispatch();
  const { apiLastUpdated } = useSelector((state) => state.appData);
  const { currentUser } = useSelector((state) => state.user);

  useAuthSubscription();

  useEffect(() => {
    if (!apiLastUpdated) {
      dispatch(getVersionDate());
    } else {
      dispatch(setTodayDate(apiLastUpdated));
    }
  }, [apiLastUpdated]);

  return (
    <div className="h-screen flex flex-col max-w-screen">
      <Router>
        <Nav />
        <main className="h-full">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/today">
              <Today />
            </Route>
            <Route exact path="/trends">
              <Trends />
            </Route>
            <Route exact path="/findvaccine">
              <FindVaccine />
            </Route>
            <Route exact path="/dashboard">
              <UserDashboard />
            </Route>
            <Route
              exact
              path="/login"
              render={() =>
                currentUser ? <Redirect to="/dashboard" /> : <Login />
              }
            />
            <Route
              exact
              path="/signup"
              render={() =>
                currentUser ? <Redirect to="/dashboard" /> : <SignUp />
              }
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
