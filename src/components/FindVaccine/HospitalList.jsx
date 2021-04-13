import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/ducks/mapSlice';

const HospitalList = ({ hospitals }) => {
  const dispatch = useDispatch();
  return (
    <ul className="flex flex-col mx-auto w-full justify-center bg-white rounded-lg shadow-xl p-4">
      <h1 className="text-center text-2xl p-4 text-blue-500">
        Vaccination sites near you
      </h1>
      {hospitals.map((hospital) => (
        <li
          key={hospital.key}
          className="flex flex-col items-center justify-between md:flex-row"
        >
          <p className="text-sm">{hospital.name}</p>
          <button
            onClick={() => dispatch(openModal(hospital))}
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 sm:flex-shrink"
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
