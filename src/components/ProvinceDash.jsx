import PropTypes from 'prop-types';
import ActiveCasesCard from './ProvinceDash/ActiveCasesCard';
import VaccinationInfoCard from './ProvinceDash/VaccinationInfoCard';

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
