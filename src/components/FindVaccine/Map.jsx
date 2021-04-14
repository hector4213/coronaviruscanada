import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import HospitalMarker from './HospitalMarker';
import UserMarker from './UserMarker';

const Map = ({ userLocation, mapResults }) => {
  return (
    <div className="h-96 flex-1">
      <MapContainer
        className="h-full w-full"
        center={userLocation}
        zoom={11}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">Mapbox</a> contributors'
          url={`https://api.mapbox.com/styles/v1/hector4213/ckmnso0et2kwu17nry64cn5bo/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX}`}
        />
        <Marker position={userLocation}>
          <Popup>You are here :)</Popup>
        </Marker>
        <UserMarker location={userLocation} />
        {mapResults.length < 1
          ? null
          : mapResults.map((hospital) => (
              <HospitalMarker
                key={hospital.key}
                hospital={hospital}
                position={[hospital.fields.lat, hospital.fields.lng]}
              />
            ))}
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  userLocation: PropTypes.instanceOf(Array).isRequired,
  mapResults: PropTypes.instanceOf(Array).isRequired,
};

export default Map;
