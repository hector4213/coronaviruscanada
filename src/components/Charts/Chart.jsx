import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';

const Chart = () => {
  const chartData = useSelector((state) => state.chart);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Cumulative Cases',
        data: chartData.data,
        backgroundColor: [
          'rgba(22, 90, 128, 0.4)',
          'rgba(167, 13, 119, 0.4)',
          'rgba(170, 107, 209, 0.4)',
          'rgba(127, 182, 52, 0.4)',
          'rgba(100, 245, 161, 0.4)',
          'rgba(104, 155, 57, 0.4)',
          'rgba(190, 152, 129, 0.4)',
          'rgba(164, 71, 34, 0.4)',
          'rgba(123, 88, 147, 0.4)',
          'rgba(221, 87, 96, 0.4)',
          'rgba(245, 222, 1, 0.4)',
          'rgba(208, 62, 105, 0.4)',
          'rgba(243, 63, 45, 0.4)',
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

  return (
    <div>
      <Pie data={data} width={100} height={50} options={{}} />
    </div>
  );
};

export default Chart;
