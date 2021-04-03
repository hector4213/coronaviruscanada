import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';

const HospitalMarker = ({ hospital }) => {
  const { fields } = hospital;
  return (
    <Marker position={[fields.lat, fields.lng]}>
      <Popup>{hospital.name}</Popup>
    </Marker>
  );
};

HospitalMarker.propTypes = {
  hospital: PropTypes.instanceOf(Object).isRequired,
};

export default HospitalMarker;
