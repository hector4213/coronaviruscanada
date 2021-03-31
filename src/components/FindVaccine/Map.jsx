import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MyComponent from './MyComponent';

const Map = ({ userLocation }) => {
  useEffect(() => {}, []);

  return (
    <MapContainer
      className="h-full w-full"
      center={userLocation}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">Mapbox</a> contributors'
        url={`https://api.mapbox.com/styles/v1/hector4213/ckmnso0et2kwu17nry64cn5bo/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX}`}
      />
      <Marker position={userLocation}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MyComponent location={userLocation} />
    </MapContainer>
  );
};

Map.propTypes = {
  userLocation: PropTypes.instanceOf(Array).isRequired,
};

export default Map;
