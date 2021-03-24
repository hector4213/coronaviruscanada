import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  });

  return (
    <>
      <ReactMapGL
        // eslint-disable-next-line
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        mapStyle="mapbox://styles/hector4213/ckmmsc0hm2mu717pjrug3glra"
        onViewportChange={(vp) => {
          setViewport(vp);
        }}
      >
        markers here
      </ReactMapGL>
    </>
  );
};

export default Map;
