import PropTypes from 'prop-types';

const ProvinceDetails = ({ province, date }) => {
  return (
    <div className="md:p-8 p-6 mt-5 bg-white shadow-xl rounded-lg flex justify-center dark:bg-gray-800 md:items-center md:flex-row gap-12">
      <h2 className="text-4xl font-extrabold text-black dark:text-white sm:text-4xl">
        <span className="block">{province}</span>
      </h2>
      <h2 className="text-4xl font-extrabold text-black dark:text-white sm:text-4xl">
        <span className="block">{date}</span>
      </h2>
    </div>
  );
};

ProvinceDetails.propTypes = {
  province: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default ProvinceDetails;
