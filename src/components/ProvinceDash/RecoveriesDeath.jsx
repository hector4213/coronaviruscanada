import PropTypes from 'prop-types';

const RecoveriesDeath = ({ totalRecoveries, totalDeaths }) => {
  return (
    <div className="md:p-8 p-6 mt-5 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row gap-12">
      <div>
        <span className="text-bold text-gray-700 dark:text-gray-400 block">
          Total Recoveries
        </span>
        <span className="text-green-500 text-4xl md:text-5xl mt-2 font-black block">
          {totalRecoveries}
        </span>
      </div>
      <div>
        <span className="text-bold text-gray-700 dark:text-gray-400 block">
          Total Deaths
        </span>
        <span className="text-red-500 text-4xl md:text-5xl mt-2 font-black block">
          {totalDeaths}
        </span>
      </div>
    </div>
  );
};

RecoveriesDeath.propTypes = {
  totalRecoveries: PropTypes.number.isRequired,
  totalDeaths: PropTypes.number.isRequired,
};
export default RecoveriesDeath;
