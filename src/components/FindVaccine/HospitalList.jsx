import PropTypes from 'prop-types';

const HospitalList = ({ hospitals }) => {
  return (
    <ul className="bg-gray-200">
      {hospitals.map((hospital) => (
        <li>
          {hospital.name}
          <button
            onClick={() => console.log('im clicked!')}
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            BOOK NOW
          </button>
        </li>
      ))}
    </ul>
  );
};

HospitalList.propTypes = {
  hospitals: PropTypes.instanceOf(Array).isRequired,
};

export default HospitalList;
