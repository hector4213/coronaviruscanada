import PropTypes from 'prop-types';
import { useMapEvents } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../redux/ducks/mapSlice';

const UserMarker = ({ location }) => {
  const dispatch = useDispatch();
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      const { lat, lng } = e.latlng;
      dispatch(setLocation([lat, lng]));
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  console.log(location);
  return null;
};

UserMarker.propTypes = {
  location: PropTypes.instanceOf(Array).isRequired,
};

export default UserMarker;
