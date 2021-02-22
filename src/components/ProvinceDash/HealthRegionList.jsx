import PropTypes from 'prop-types';
import regions from '../../assets/static/healthregions';

const HealthRegionList = ({ province }) => {
  console.log(regions, province);
  return (
    <select
      className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      name="regions"
    >
      {regions[province].map((prov) => (
        <option value={prov.code}>{prov.region}</option>
      ))}
    </select>
  );
};

HealthRegionList.propTypes = {
  province: PropTypes.string.isRequired,
};

export default HealthRegionList;
