import PropTypes from 'prop-types';

const ProvinceBtn = ({ provinceName }) => {
  return (
    <button
      type="button"
      className="py-2 px-4 rounded bg-gradient-to-r from-purple-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
    >
      {provinceName}
    </button>
  );
};

ProvinceBtn.propTypes = {
  provinceName: PropTypes.string.isRequired,
};

export default ProvinceBtn;
