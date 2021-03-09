import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProvTrendsByDate } from './redux/ducks/chart';
import Chart from './components/Charts/Chart';
import ProvinceBtn from './components/Charts/ProvinceBtn';

const Trends = () => {
  const chart = useSelector((state) => state.chart);
  const dispatch = useDispatch();
  const { apiLastUpdated } = useSelector((state) => state.appData);

  useEffect(() => {
    dispatch(getProvTrendsByDate('prov', apiLastUpdated));
  }, []);

  return (
    <div className="flex justify-between py-4 px-4 bg-gray-100 h-full">
      <div className="w-1/2">
        <h1 className="text-center text-2xl p-6">
          Select a province to view chart data
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {chart.labels.map((label) => (
            <ProvinceBtn provinceName={label} />
          ))}
        </div>
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
