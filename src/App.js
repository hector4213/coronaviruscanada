import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Provinces from './components/Provinces';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Provinces />
      </Router>
    </div>
  );
};

export default App;
