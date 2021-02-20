import PropTypes from 'prop-types';
import regions from '../assets/static/healthregions';

const HealthRegionList = ({ regionsFor }) => {
  console.log(regions, regionsFor);
  return <div>im a region</div>;
};

HealthRegionList.propTypes = {
  regionsFor: PropTypes.string.isRequired,
};

export default HealthRegionList;
