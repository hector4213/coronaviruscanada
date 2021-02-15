import { useState, useEffect } from 'react';
import './App.css';
import covidService from './api/covid';
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await covidService.getData();
      setData(apiData);
    };
    fetchApi();
    console.log(data);
  }, []);

  return <Header />;
};

export default App;
