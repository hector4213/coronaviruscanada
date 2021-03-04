import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodayDate, fetchProvinceSummary } from '../../redux/ducks/summary';
import { userHasSelected, regionSelect } from '../../redux/ducks/regions';
import HealthRegionList from './HealthRegionList';

const ProvinceDetails = ({ province, code }) => {
  const { currentDate } = useSelector((state) => state.summaries);
  const { apiLastUpdated, apiStartDate } = useSelector(
    (state) => state.appData,
  );
  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    // TODO: first dispatch changes state for today, shoud just change for this component
    dispatch(setTodayDate(e.target.value));
    dispatch(fetchProvinceSummary(code, e.target.value));
  };

  const resetRegionCard = () => {
    dispatch(userHasSelected(false));
    dispatch(regionSelect(''));
  };

  useEffect(() => {
    // TODO : this causing multiple rerender
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
