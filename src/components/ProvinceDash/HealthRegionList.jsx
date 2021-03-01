import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRegionSummary, regionSelect } from '../../redux/ducks/regions';
import regions from '../../assets/static/healthregions';
import RegionCard from './RegionCard';

const HealthRegionList = ({ province }) => {
  const provinceRegion = useSelector((state) => state.regionSummaries);
  const currentDate = useSelector((state) => state.summaries.currentDate);
  const { hasSelected, regionData, selectedRegion } = provinceRegion;
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRegion) {
      dispatch(getRegionSummary(selectedRegion, currentDate));
    }
  }, [selectedRegion, currentDate]);
  return (
    <>
      <label className="text-gray-700 text-center" htmlFor="regions">
        View Region Summary
        <select
          onChange={(e) => dispatch(regionSelect(e.target.value))}
          value={selectedRegion}
          className="text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="regions"
        >
          {regions[province].map((prov) => (
            <option key={prov.code} value={prov.code}>
              {prov.region}
            </option>
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
