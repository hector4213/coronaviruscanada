import PropTypes from 'prop-types';
import { GiHealthCapsule } from 'react-icons/gi';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="shadow-lg rounded-2xl w-80 p-4 mb-2 bg-white relative overflow-hidden md:mr-4">
      <GiHealthCapsule className="absolute -right-20 -bottom-8 h-40 w-40 mb-4" />
      <div className="w-4/6 h-full flex flex-col justify-around">
        <p className="text-gray-800 text-lg font-medium mb-2">
          {appointment.location}
        </p>
        <p className="text-gray-400 text-md">{appointment.date}</p>
        <p className="text-indigo-500 text-xl font-medium">
          Time: {appointment.time}
        </p>
        <button
          className="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

AppointmentCard.propTypes = {
  appointment: PropTypes.instanceOf(Object).isRequired,
};

export default AppointmentCard;
