import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccineStats } from './redux/ducks/chart';
import Chart from './components/Charts/Chart';

const Trends = () => {
  const dispatch = useDispatch();
  const { apiLastUpdated } = useSelector((state) => state.appData);

  useEffect(() => {
    dispatch(getVaccineStats(apiLastUpdated));
  }, []);

  return (
    <div className="flex justify-between py-4 px-4 bg-gray-100 h-full">
      <div className="w-1/2">
        <h1 className="text-center text-2xl p-6">
          Select a province to view chart data
        </h1>
        <div className="grid grid-cols-3 gap-4">next chart here</div>
      </div>
      <div className="w-1/2">
        <h1 className="text-center text-3xl p-6">
          Cumulative Cases for Canada
        </h1>
        <Chart />
      </div>
    </div>
  );
};

export default Trends;
