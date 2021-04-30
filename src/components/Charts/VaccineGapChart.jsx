import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import {
  getVaccineStats,
  setInitDate,
} from '../../redux/ducks/vaccineGapSlice';

const VaccineGapChart = () => {
  const { apiLastUpdated, apiStartDate } = useSelector(
    (state) => state.appData,
  );
  const { labels, distributed, administered, currentDate } = useSelector(
    (state) => state.vaccineGap,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentDate) {
      dispatch(setInitDate(apiLastUpdated));
    } else {
      dispatch(getVaccineStats(currentDate));
    }
  }, [apiLastUpdated, currentDate]);

  const onDateChange = (e) => {
    dispatch(setInitDate(e.target.value));
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Doses Distributed',
        fill: true,
        backgroundColor: 'rgb(0, 255, 128)',
        borderColor: 'rgba(0, 255, 128, 0.75)',
        data: distributed,
      },
      {
        label: 'Doses Administered',
        fill: true,
        backgroundColor: 'rgb(255, 128, 0)',
        borderColor: 'rgba(255, 128, 0, 0.75)',
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

  if (!apiLastUpdated) {
    return null;
  }
  return (
    <div className="bg-white shadow-xl rounded-lg text-center mt-3">
      <div className="p-3">
        <input
          type="date"
          min={apiStartDate}
          max={apiLastUpdated}
          value={currentDate}
          onChange={onDateChange}
        />
      </div>
      <div className="h-72 p-7 w-full">
        <Line data={data} options={OPTIONS} />
      </div>
    </div>
  );
};

export default VaccineGapChart;
