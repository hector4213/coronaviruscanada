import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccineData } from './redux/ducks/vaccineChartSlice';
import VaccineChart from './components/Charts/VaccineChart';
import CasesChart from './components/Charts/CasesChart';

const Trends = () => {
  const dispatch = useDispatch();
  const { apiLastUpdated } = useSelector((state) => state.appData);

  useEffect(() => {
    if (apiLastUpdated) {
      dispatch(getVaccineData(apiLastUpdated));
    }
  }, [apiLastUpdated]);

  return (
    <div className="flex justify-between py-4 px-4 bg-gray-100 h-full">
      <div className="w-1/2">
        <h1 className="text-center text-2xl p-6">
          Select a province to view chart data
        </h1>
        <div className="">
          <CasesChart />
        </div>
      </div>
      <div className="w-1/2">
        <VaccineChart />
      </div>
    </div>
  );
};

export default Trends;
