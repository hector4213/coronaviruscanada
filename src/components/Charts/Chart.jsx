import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { getProvTrendsByDate } from '../../redux/ducks/chart';

const Chart = () => {
  const chartData = useSelector((state) => state.chart);
  const dispatch = useDispatch();

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Cumulative Cases',
        data: chartData.data,
        backgroundColor: [
          'rgb(22, 90, 128)',
          'rgb(167, 13, 119)',
          'rgb(170, 107, 209)',
          'rgb(127, 182, 52)',
          'rgb(100, 245, 161)',
          'rgb(104, 155, 57)',
          'rgb(190, 152, 129)',
          'rgb(164, 71, 34)',
          'rgb(123, 88, 147)',
          'rgb(221, 87, 96)',
          'rgb(245, 222, 1)',
          'rgb(208, 62, 105)',
          'rgb(243, 63, 45)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    dispatch(getProvTrendsByDate('prov', '01-09-2020'));
  }, []);
  return (
    <div>
      <Pie data={data} width={100} height={50} options={{}} />
    </div>
  );
};

export default Chart;
