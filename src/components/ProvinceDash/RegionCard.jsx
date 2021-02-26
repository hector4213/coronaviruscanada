import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaBriefcaseMedical, FaRegSadCry } from 'react-icons/fa';
import { GiDeathSkull, GiPlagueDoctorProfile } from 'react-icons/gi';
import { CgCloseO } from 'react-icons/cg';
import { clearRegionSummary } from '../../redux/ducks/regions';

const RegionCard = ({ data }) => {
  const {
    cases,
    cumulative_cases,
    cumulative_deaths,
    deaths,
    health_region,
  } = data;

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearRegionSummary());
  };

  return (
    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-800 relative">
      <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
        {health_region}
      </p>
      <div className="flex items-end space-x-2 my-6">
        <p className="text-5xl text-black dark:text-white font-bold">{cases}</p>
        <span className="text-green-500 text-xl font-bold flex items-center">
          <FaBriefcaseMedical />
        </span>
      </div>
      <div className="dark:text-white">
        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
          <p>Deaths Today</p>
          <div className="flex items-center text-lg">
            {deaths}
            <span className="flex items-center text-blue-500">
              <FaRegSadCry />
            </span>
          </div>
        </div>
        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
          <p>Total Deaths</p>
          <div className="flex items-center  text-lg">
            {cumulative_deaths}
            <span className="flex items-center text-red-500">
              <GiDeathSkull />
            </span>
          </div>
        </div>
        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
          <p>Total Cases</p>
          <div className="flex items-center text-lg">
            {cumulative_cases}
            <span className="flex items-center">
              <GiPlagueDoctorProfile />
            </span>
          </div>
        </div>
      </div>
      <span className="absolute top-0 right-0 p-3 cursor-pointer">
        <CgCloseO onClick={handleClose} />
      </span>
    </div>
  );
};

RegionCard.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default RegionCard;
