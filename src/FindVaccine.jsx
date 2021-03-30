import { useEffect } from 'react';
import Map from './components/FindVaccine/Map';

const FindVaccine = () => {
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="bg-red-600">
      <div id="map" className="h-96 max-w-sm bg-black">
        <Map />
      </div>
    </div>
  );
};

export default FindVaccine;
