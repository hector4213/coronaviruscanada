import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccineData } from './redux/ducks/vaccineChartSlice';
import VaccineChart from './components/Charts/VaccineChart';
import CasesChart from './components/Charts/CasesChart';
import VaccineGapChart from './components/Charts/VaccineGapChart';
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
    <div className="flex flex-col items-center py-7 px-4 md:flex-row md:items-start">
      <div className="w-full my-1 mx-1 md:w-1/2 md:mr-5">
        <CanadaStats />
        <VaccineChart />
        {/* TODO: fetch cumulative doses and cumulative vaccinations from inception of vaccine */}
        <VaccineGapChart />
      </div>
      <div className="md:w-1/2">
        <CasesChart />
      </div>
    </div>
  );
};

export default Trends;
