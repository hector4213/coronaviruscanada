import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSummaryDate, setTodayDate } from '../../redux/ducks/summary';
import HealthRegionList from './HealthRegionList';

const ProvinceDetails = ({ province, date }) => {
  const currentDate = useSelector((state) => state.summaries.currentDate);
  const dispatch = useDispatch();

  const convertForInput = (dateString) => {
    const formattedDate = dateString.split('-').reverse().join('-');
    return formattedDate;
  };

  const handleDateChange = (e) => {
    dispatch(changeSummaryDate(e.target.value));
    dispatch(setTodayDate(e.target.value));
  };

  useEffect(() => {
    dispatch(setTodayDate(convertForInput(date)));
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
          onChange={handleDateChange}
        />
      </h2>
      <HealthRegionList province={province} />
    </div>
  );
};

ProvinceDetails.propTypes = {
  province: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default ProvinceDetails;
