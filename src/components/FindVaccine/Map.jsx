import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ userLocation }) => {
  const { lat, long } = userLocation;
  return (
    <MapContainer
      className="h-full w-full"
      center={[lat, long]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/hector4213/ckmnso0et2kwu17nry64cn5bo/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX}`}
      />
      <Marker position={[lat, long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  userLocation: PropTypes.instanceOf(Object).isRequired,
};

export default Map;
