import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getRegionSummary } from '../../redux/ducks/regions';
import regions from '../../assets/static/healthregions';
import RegionCard from './RegionCard';

const HealthRegionList = ({ province }) => {
  const provinceRegion = useSelector((state) => state.regionSummaries);
  const { hasSelected, regionData } = provinceRegion;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(getRegionSummary(e.target.value));
  };

  console.log(regionData);
  return (
    <>
      <label className="text-gray-700" htmlFor="regions">
        Select to view region summary
        <select
          onChange={handleChange}
          className="text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="regions"
        >
          {regions[province].map((prov) => (
            <option value={prov.code}>{prov.region}</option>
          ))}
        </select>
      </label>
      {hasSelected && <RegionCard data={regionData} />}
    </>
  );
};

HealthRegionList.propTypes = {
  province: PropTypes.string.isRequired,
};

export default HealthRegionList;
