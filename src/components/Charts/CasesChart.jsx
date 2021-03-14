import { Line } from 'react-chartjs-2';

const CasesChart = () => {
  const data = {
    labels: ['1', '2', '3'],
    datasets: [
      {
        label: 'Vaccinations',
        fill: false,
        backgroundColor: 'rgb(0, 255, 128)',
        borderColor: 'rgba(0, 255, 128, 0.75)',
        data: null,
      },
      {
        label: 'Cases',
        fill: false,
        backgroundColor: 'rgb(255, 128, 0)',
        borderColor: 'rgba(255, 128, 0, 0.75)',
        borderDash: [5, 5],
        data: null,
      },
      {
        label: 'Deaths',
        fill: true,
        backgroundColor: 'rgba(77, 201, 246, 0.5)',
        borderColor: '#4dc9f6',
        data: null,
      },
    ],
  };
  return (
    <div>
      <Line data={data} width={100} height={50} options={{}} />
    </div>
  );
};

export default CasesChart;
