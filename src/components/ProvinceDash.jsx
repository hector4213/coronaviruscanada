import PropTypes from 'prop-types';
import ActiveCasesCard from './ProvinceDash/ActiveCasesCard';
import VaccinationInfoCard from './ProvinceDash/VaccinationInfoCard';
import RecoveriesDeath from './ProvinceDash/RecoveriesDeath';
import TestingCard from './ProvinceDash/TestingCard';
import ProvinceDetails from './ProvinceDash/ProvinceDetails';

const ProvinceDash = ({ selectedProvince, code }) => {
  return (
    <div className="container mx-auto">
      <ProvinceDetails
        province={selectedProvince.province}
        date={selectedProvince.date}
        code={code}
      />
      <RecoveriesDeath
        totalRecoveries={selectedProvince.cumulative_recovered}
        totalDeaths={selectedProvince.cumulative_deaths}
      />
      <ActiveCasesCard selectedProvince={selectedProvince} />
      <VaccinationInfoCard
        vaccinesToday={selectedProvince.avaccine}
        totalVaccines={selectedProvince.cumulative_avaccine}
      />
      <TestingCard
        totalTested={selectedProvince.cumulative_testing}
        testedToday={selectedProvince.testing}
      />
    </div>
  );
};

ProvinceDash.propTypes = {
  selectedProvince: PropTypes.instanceOf(Object).isRequired,
  code: PropTypes.number.isRequired,
};

export default ProvinceDash;
