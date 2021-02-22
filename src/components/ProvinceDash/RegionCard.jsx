import PropTypes from 'prop-types';

const RegionCard = ({ data }) => {
  console.log(data);
  return (
    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-800 relative">
      <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
        Project Reffered
      </p>
      <div className="flex items-end space-x-2 my-6">
        <p className="text-5xl text-black dark:text-white font-bold">12</p>
        <span className="text-green-500 text-xl font-bold flex items-center">
          <div>icon here</div>
          22%
        </span>
      </div>
      <div className="dark:text-white">
        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
          <p>Deaths Today</p>
          <div className="flex items-end text-xs">
            34
            <span className="flex items-center">
              <div>icon here</div>
              22%
            </span>
          </div>
        </div>
        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
          <p>Total Deaths</p>
          <div className="flex items-end text-xs">
            13
            <span className="flex items-center">
              <div>icon here</div>
              12%
            </span>
          </div>
        </div>
        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
          <p>New visitor</p>
          <div className="flex items-end text-xs">
            45
            <span className="flex items-center">
              <div>icon here</div>
              41%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

RegionCard.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default RegionCard;
