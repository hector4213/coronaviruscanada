import { useState, useEffect } from 'react';
import './App.css';
import covidService from './api/covid';
import Header from './components/Header';
import Provinces from './components/Provinces';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await covidService.getData();
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
      <Header />
      <Provinces provinceData={data} />
    </div>
  );
};

export default App;
