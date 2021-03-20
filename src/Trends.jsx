import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccineData } from './redux/ducks/vaccineChartSlice';
import VaccineChart from './components/Charts/VaccineChart';
import CasesChart from './components/Charts/CasesChart';
import ProvinceChart from './components/Charts/ProvinceChart';
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
    <div className="h-full flex flex-col items-center py-4 px-4 bg-gray-100 md:flex-row md:items-start">
      <div className="w-full my-1 mx-1 md:w-1/2  md:mr-5">
        <CanadaStats />
        <VaccineChart />
        <ProvinceChart />
      </div>
      <div className="h-96 w-80 md:w-1/2">
        <CasesChart />
      </div>
    </div>
  );
};

export default Trends;
