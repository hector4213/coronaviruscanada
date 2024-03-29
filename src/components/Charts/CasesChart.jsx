import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { getWeekSummaryCanada } from '../../redux/ducks/casesChartSlice';
import DatePicker from './DatePicker';

const CasesChart = () => {
  const { vaccinations, cases, deaths, dates } = useSelector(
    (state) => state.casesData,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!vaccinations || !deaths || !cases) {
      dispatch(
        getWeekSummaryCanada({ before: '13-03-2021', after: '01-01-2021' }),
      );
    }
  }, []);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Vaccinations',
        fill: false,
        backgroundColor: 'rgb(0, 255, 128)',
        borderColor: 'rgba(0, 255, 128, 0.75)',
        data: vaccinations,
      },
      {
        label: 'Cases',
        fill: false,
        backgroundColor: 'rgb(255, 128, 0)',
        borderColor: 'rgba(255, 128, 0, 0.75)',
        borderDash: [5, 5],
        data: cases,
      },
      {
        label: 'Deaths',
        fill: true,
        backgroundColor: 'rgba(77, 201, 246, 0.5)',
        borderColor: '#4dc9f6',
        data: deaths,
      },
    ],
  };
  const OPTIONS = {
    title: {
      display: true,
      text: 'Vaccinations, Cases, Deaths',
      padding: 0,
      fontSize: 25,
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="w-full flex flex-col ">
      <div className="bg-white shadow-xl rounded-lg w-full text-center">
        <h1 className="text-4xl p-5 font-thin text-gray-800">Select a date</h1>
        <DatePicker />
      </div>
      <article className="h-96 w-full mt-3 p-7 bg-white shadow-xl rounded-lg">
        <Line data={data} options={OPTIONS} />
      </article>
    </div>
  );
};

export default CasesChart;
