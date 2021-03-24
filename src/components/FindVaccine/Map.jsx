import ReactMapGL from 'react-map-gl';
import PropTypes from 'prop-types';

const Map = ({ viewport }) => {
  return (
    <>
      <ReactMapGL
        // eslint-disable-next-line
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      >
        markers here
      </ReactMapGL>
    </>
  );
};

Map.propTypes = {
  viewport: PropTypes.instanceOf(Object).isRequired,
};

export default Map;
