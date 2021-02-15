import { useState, useEffect } from 'react';
import './App.css';
import covidService from './api/covid';

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

  return <h1>Hello World</h1>;
};

export default App;
