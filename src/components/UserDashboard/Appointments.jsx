import PropTypes from 'prop-types';
import AppointmentCard from './AppointmentCard';

const Appointments = ({ appointments }) => {
  return (
    <div className="flex">
      {appointments.map((appointment) => (
        <AppointmentCard appointment={appointment} />
      ))}
    </div>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
};

export default Appointments;
