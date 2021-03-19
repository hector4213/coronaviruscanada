import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getVaccineStats } from '../../redux/ducks/vaccineGapSlice';

const ProvinceChart = () => {
  const { apiLastUpdated, apiStartDate } = useSelector(
    (state) => state.appData,
  );
  const { labels, distributed, administered } = useSelector(
    (state) => state.vaccineGap,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (apiStartDate) {
      dispatch(getVaccineStats('2020-03-18'));
    }
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Doses Distributed',
        fill: false,
        backgroundColor: 'rgb(0, 255, 128)',
        borderColor: 'rgba(0, 255, 128, 0.75)',
        data: distributed,
      },
      {
        label: 'Doses Administered',
        fill: false,
        backgroundColor: 'rgb(255, 128, 0)',
        borderColor: 'rgba(255, 128, 0, 0.75)',
        borderDash: [5, 5],
        data: administered,
      },
    ],
  };
  const OPTIONS = {
    title: {
      display: true,
      text: "Canada's Vaccine Gap",
      padding: 0,
      fontSize: 25,
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="h-80  bg-white shadow-xl rounded-lg text-center md:h-1/2 ">
      <input type="date" min={apiStartDate} max={apiLastUpdated} />
      <Bar data={data} options={OPTIONS} />
    </div>
  );
};

export default ProvinceChart;
