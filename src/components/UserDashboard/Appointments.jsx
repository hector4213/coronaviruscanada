import PropTypes from 'prop-types';
import AppointmentCard from './AppointmentCard';

const Appointments = ({ appointments }) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-start">
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
};

export default Appointments;
