import PropTypes from 'prop-types';
import AppointmentCard from './AppointmentCard';

const Appointments = ({ appointments }) => {
  return (
    <div className="container w-full">
      <h3 className="text-xl my-4 font-thin text-center">
        You currently have {appointments.length} appointments
      </h3>
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
};

export default Appointments;
