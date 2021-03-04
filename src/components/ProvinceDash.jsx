import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProvinceSummary } from '../redux/ducks/summary';
import ActiveCasesCard from './ProvinceDash/ActiveCasesCard';
import VaccinationInfoCard from './ProvinceDash/VaccinationInfoCard';
import RecoveriesDeath from './ProvinceDash/RecoveriesDeath';
import TestingCard from './ProvinceDash/TestingCard';
import ProvinceDetails from './ProvinceDash/ProvinceDetails';

const ProvinceDash = ({ code }) => {
  const provinceData = useSelector((state) => state.summaries);
  const { currentProvince, currentDate } = provinceData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProvinceSummary(code, currentDate));
  }, []);

  if (!currentProvince) {
    return null;
    // TODO: add loader
  }
  return (
    <div className="container mx-auto">
      <ProvinceDetails province={currentProvince.province} code={code} />
      <RecoveriesDeath
        totalRecoveries={currentProvince.cumulative_recovered}
        totalDeaths={currentProvince.cumulative_deaths}
      />
      {/* active cases card takes these props: active_cases, active_cases_change, should not acccept a whole object */}
      <ActiveCasesCard selectedProvince={currentProvince} />
      <VaccinationInfoCard
        vaccinesToday={currentProvince.avaccine}
        totalVaccines={currentProvince.cumulative_avaccine}
      />
      <TestingCard
        totalTested={currentProvince.cumulative_testing}
        testedToday={currentProvince.testing}
      />
    </div>
  );
};

ProvinceDash.propTypes = {
  code: PropTypes.string.isRequired,
};

export default ProvinceDash;
