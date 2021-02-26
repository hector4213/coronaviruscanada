import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRegionSummary } from '../../redux/ducks/regions';
import regions from '../../assets/static/healthregions';
import RegionCard from './RegionCard';

const HealthRegionList = ({ province }) => {
  const provinceRegion = useSelector((state) => state.regionSummaries);
  const currentDate = useSelector((state) => state.summaries.currentDate);
  const { hasSelected, regionData } = provinceRegion;
  const dispatch = useDispatch();
  const ref = useRef();

  const handleChange = (e) => {
    dispatch(getRegionSummary(e.target.value, currentDate));
  };

  useEffect(() => {
    if (hasSelected) {
      dispatch(getRegionSummary(ref.current.value, currentDate));
    }
  }, [currentDate]);
  return (
    <>
      <label className="text-gray-700 text-center" htmlFor="regions">
        View Region Summary
        <select
          onChange={handleChange}
          className="text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="regions"
        >
          {regions[province].map((prov) => (
            <option key={prov.code} value={prov.code} ref={ref}>
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
