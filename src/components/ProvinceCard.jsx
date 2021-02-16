import PropTypes from 'prop-types';

const ProvinceCard = ({ name, logo, province }) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
      <a href="/home" className="w-full block h-full">
        <img
          alt="province"
          src={logo}
          className="max-h-70 w-full object-cover"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {name}
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            some text
          </p>
          <div className="flex flex-wrap justify-starts items-center mt-4">
            <div className="text-xs mr-2 py-1.5 px-4 mt-2 text-gray-100 bg-green-600 rounded-2xl">
              {`Active Cases: ${province.active_cases}`}
            </div>
            <div className="text-xs mr-2 py-1.5 px-4 mt-2 text-gray-100 bg-red-500 rounded-2xl">
              {`Deaths ${province.cumulative_deaths}`}
            </div>
            <div className="text-xs mr-2 py-1.5 px-4 mt-2 text-gray-100 bg-blue-500 rounded-2xl">
              {`Recovered ${province.cumulative_recovered}`}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

ProvinceCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  province: PropTypes.instanceOf(Object).isRequired,
};

export default ProvinceCard;
