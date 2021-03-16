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
    <div className="flex flex-col justify-around items-center py-4 px-4 bg-gray-100 min-h-screen lg:flex-row ">
      <div className="flex justify-center w-full my-1 mx-1 md:w-1/2 md:h-screen">
        <VaccineChart />
      </div>
      <div className="md:w-1/2 md:h-screen md:flex justify-center my-1 mx-1">
        <CasesChart />
      </div>
    </div>
  );
};

export default Trends;
