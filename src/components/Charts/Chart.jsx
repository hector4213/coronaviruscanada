import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = async () => {
    const dataCases = [];
    const response = await fetch(
      'https://api.opencovid.ca/timeseries?stat=cases&loc=prov&date=03-03-2021',
    );
    const apiData = await response.json();

    apiData.cases.forEach((item) => dataCases.push(item));

    setChartData({
      labels: apiData.cases.map((item) => item.province),
      datasets: [
        {
          label: 'Active Cases',
          data: dataCases.map((item) => item.cases),
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <Bar data={chartData} width={100} height={50} options={{}} />
    </div>
  );
};

export default Chart;
