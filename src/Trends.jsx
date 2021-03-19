import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccineData } from './redux/ducks/vaccineChartSlice';
import VaccineChart from './components/Charts/VaccineChart';
import CasesChart from './components/Charts/CasesChart';
import CanadaStats from './components/Charts/CanadaStats';

const Trends = () => {
  const dispatch = useDispatch();
  const { apiLastUpdated } = useSelector((state) => state.appData);

  useEffect(() => {
    if (apiLastUpdated) {
      dispatch(getVaccineData(apiLastUpdated));
    }
  }, [apiLastUpdated]);

  return (
    <div className="flex flex-col items-center py-4 px-4 bg-gray-100 lg:flex-row ">
      <div className="w-full my-1 mx-1 md:w-1/2 md:min-h-screen md:mr-5">
        <CanadaStats />
        <VaccineChart />
      </div>
      <div className="min-h-screen md:flex md:w-1/2">
        <CasesChart />
      </div>
    </div>
  );
};

export default Trends;
