import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Provinces from './components/Provinces';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Provinces />
      </Router>
    </div>
  );
};

export default App;
