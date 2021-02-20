import PropTypes from 'prop-types';
import regions from '../assets/static/healthregions';
import HealthRegionItem from './HealthRegionItem';

const HealthRegionList = ({ province }) => {
  console.log(regions, province);
  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul className="flex flex-col divide divide-y">
        {regions[province].map((reg) => (
          <HealthRegionItem region={reg.region} />
        ))}
      </ul>
    </div>
  );
};

HealthRegionList.propTypes = {
  province: PropTypes.string.isRequired,
};

export default HealthRegionList;
