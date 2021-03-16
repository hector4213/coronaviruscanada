import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import CanadaStats from './CanadaStats';

const VaccineChart = () => {
  const { stats } = useSelector((state) => state.vaccineData);

  const data = {
    labels: ['Vaccinated', 'Fully Vaccinated', 'Unvaccinated'],
    datasets: [
      {
        label: ['Vacc data'],
        data: stats,
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

  const OPTIONS = {
    title: {
      display: true,
      text: 'Canadian Vaccinations',
      padding: 0,
      fontSize: 25,
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="h-1/2 w-full md:w-full md:h-1/2">
      <CanadaStats />
      <div className="h-80 w-full bg-white p-6 shadow-xl rounded-lg mt-3">
        <Pie data={data} options={OPTIONS} />
      </div>
    </div>
  );
};

export default VaccineChart;
