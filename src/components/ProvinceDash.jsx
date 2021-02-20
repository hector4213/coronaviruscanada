import PropTypes from 'prop-types';
import ActiveCasesCard from './ActiveCasesCard';

import VaccinationInfoCard from './VaccinationInfoCard';

const ProvinceDash = ({ selectedProvince }) => {
  return (
    <div className="container mx-auto">
      <ActiveCasesCard selectedProvince={selectedProvince} />
      <VaccinationInfoCard />
    </div>
  );
};

ProvinceDash.propTypes = {
  selectedProvince: PropTypes.instanceOf(Object).isRequired,
};

export default ProvinceDash;
