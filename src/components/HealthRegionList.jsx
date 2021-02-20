import PropTypes from 'prop-types';
import regions from '../assets/static/healthregions';

const HealthRegionList = ({ province }) => {
  console.log(regions, province);
  return <div>{regions[province].map((reg) => reg.region)}</div>;
};

HealthRegionList.propTypes = {
  province: PropTypes.string.isRequired,
};

export default HealthRegionList;
