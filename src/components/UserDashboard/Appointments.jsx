import PropTypes from 'prop-types';

const Appointments = ({ appointments }) => {
  return (
    <div>
      <p>{appointments.map((appointment) => appointment.location)}</p>
    </div>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
};

export default Appointments;
