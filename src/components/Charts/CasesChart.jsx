import { Line } from 'react-chartjs-2';

const CasesChart = () => {
  const data = {
    labels: ['Vaccinated', 'Fully Vaccinated', 'Unvaccinated'],
    datasets: [
      {
        label: ['Data 1'],
        data: [100, 200, 300],
        backgroundColor: [
          'rgba(65,105,225, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
        ],
        borderColor: [
          'rgb(0, 255, 128)',
          'rgb(77, 201, 246)',
          'rgb(255, 128, 0)',
        ],
        borderWidth: 1,
      },
      {
        label: ['Data 2'],
        data: [100, 200, 300],
        backgroundColor: [
          'rgba(65,105,225, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
        ],
        borderColor: [
          'rgb(0, 255, 128)',
          'rgb(77, 201, 246)',
          'rgb(255, 128, 0)',
        ],
        borderWidth: 1,
      },
      {
        label: ['Data 3'],
        data: [100, 200, 300],
        backgroundColor: [
          'rgba(65,105,225, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
        ],
        borderColor: [
          'rgb(0, 255, 128)',
          'rgb(77, 201, 246)',
          'rgb(255, 128, 0)',
        ],
        borderWidth: 1,
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
