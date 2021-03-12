import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodayDate } from '../../redux/ducks/summarySlice';
import { clearRegionSummary } from '../../redux/ducks/regionSlice';
import HealthRegionList from './HealthRegionList';

const ProvinceDetails = ({ province, code }) => {
  const { currentDate } = useSelector((state) => state.summaries);
  const { apiLastUpdated, apiStartDate } = useSelector(
    (state) => state.appData,
  );
  const dispatch = useDispatch();
  console.log(code); //  this prop can be delete?
  const handleDateChange = (e) => {
    dispatch(setTodayDate(e.target.value));
  };

  const resetRegionCard = () => {
    dispatch(clearRegionSummary());
  };

  useEffect(() => {
    return () => resetRegionCard();
  }, []);

  return (
    <div className="flex-col md:p-8 p-6 mt-5 bg-white shadow-xl rounded-lg flex justify-center dark:bg-gray-800 md:items-center md:flex-row gap-12">
      <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl text-center">
        <span className="block">{province}</span>
      </h2>
      <h2 className="text-2xl font-bold text-black dark:text-white sm:text-4xl text-center">
        <input
          type="date"
          value={currentDate}
          name="currentdate"
          min={apiStartDate}
          max={apiLastUpdated}
          onChange={handleDateChange}
        />
      </h2>
      <HealthRegionList province={province} />
    </div>
  );
};

ProvinceDetails.propTypes = {
  province: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
export default ProvinceDetails;
