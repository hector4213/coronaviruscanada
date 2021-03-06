import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getProvinceSummary } from '../redux/ducks/summarySlice';
import ActiveCasesCard from './ProvinceDash/ActiveCasesCard';
import VaccinationInfoCard from './ProvinceDash/VaccinationInfoCard';
import RecoveriesDeath from './ProvinceDash/RecoveriesDeath';
import TestingCard from './ProvinceDash/TestingCard';
import ProvinceDetails from './ProvinceDash/ProvinceDetails';

const ProvinceDash = ({ code }) => {
  const { currentProvince, currentDate } = useSelector(
    (state) => state.summaries,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProvinceSummary({ provCode: code, userDate: currentDate }));
  }, [currentDate]);

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
      <ActiveCasesCard
        activeCases={currentProvince.active_cases}
        activeCasesChange={currentProvince.active_cases_change}
      />
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
