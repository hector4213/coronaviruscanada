import PropTypes from 'prop-types';

const TestingCard = ({ totalTested, testedToday }) => {
  return (
    <div className="md:p-8 p-6 mt-5 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row gap-12">
      <div>
        <span className="text-bold text-gray-700 dark:text-gray-400 block">
          Total Tested
        </span>
        <span className="text-green-500 text-4xl md:text-5xl mt-2 font-black block">
          {totalTested}
        </span>
      </div>
      <div>
        <span className="text-bold text-gray-700 dark:text-gray-400 block">
          Tested Today
        </span>
        <span className="text-green-500 text-4xl md:text-5xl mt-2 font-black block">
          {testedToday}
        </span>
      </div>
    </div>
  );
};

TestingCard.propTypes = {
  totalTested: PropTypes.number.isRequired,
  testedToday: PropTypes.number.isRequired,
};

export default TestingCard;
