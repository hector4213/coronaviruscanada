import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import covidService from './api/covid';
import Header from './components/Header';
import Provinces from './components/Provinces';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await covidService.getSummaries();
      setData(apiData);
      setIsLoading(false);
    };
    fetchApi();
    console.log(data);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Router>
        <Header />
        <Provinces provinceData={data} />
      </Router>
    </div>
  );
};

export default App;
