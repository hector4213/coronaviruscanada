import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';

const VaccineChart = () => {
  const { data: chartData } = useSelector((state) => state.vaccineData);

  const data = {
    labels: ['Vaccinated', 'Fully Vaccinated', 'Unvaccinated'],
    datasets: [
      {
        label: ['Vacc data'],
        data: chartData,
        backgroundColor: [
          'rgba(0, 255, 128, 0.5)',
          'rgba(77, 201, 246, 0.5)',
          'rgba(255, 128, 0, 0.5)',
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

  const OPTIONS = {
    title: {
      display: true,
      text: 'Canadian Vaccinations',
      padding: 0,
      fontSize: 18.5,
    },
  };
  return (
    <div>
      <Pie data={data} width={100} height={50} options={OPTIONS} />
    </div>
  );
};

export default VaccineChart;
