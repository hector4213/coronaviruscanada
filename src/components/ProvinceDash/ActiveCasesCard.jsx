import PropTypes from 'prop-types';
import { GiHealthIncrease } from 'react-icons/gi';

const ActiveCasesCard = ({ selectedProvince }) => {
  return (
    <div className="md:p-8 p-6 mt-5 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row gap-12">
      <div>
        <span className="text-bold text-gray-700 dark:text-gray-400 block">
          Active Cases
        </span>
        <span className="text-yellow-500 text-4xl md:text-5xl mt-2 font-black block">
          {selectedProvince.active_cases}
        </span>
      </div>
      <div className="self-end">
        <div className="md:text-right text-left md:block">
          <p className="text-xl md:mb-2 mb-0 dark:text-gray-100 flex items-center increase">
            <GiHealthIncrease
              size="2.5rem"
              color={selectedProvince.active_cases_change < 0 ? 'green' : 'red'}
            />
            Changes from yesterday ({selectedProvince.active_cases_change})
          </p>
        </div>
      </div>
    </div>
  );
};

ActiveCasesCard.propTypes = {
  selectedProvince: PropTypes.instanceOf(Object).isRequired,
};

export default ActiveCasesCard;
