import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPositionPromise } from './lib/geolocation';
import { setLocation } from './redux/ducks/mapSlice';

import Map from './components/FindVaccine/Map';

const FindVaccine = () => {
  const { userLocation } = useSelector((state) => state.map);

  const dispatch = useDispatch();

  const getUserLocation = async () => {
    try {
      const position = await getCurrentPositionPromise();
      const { latitude, longitude } = position.coords;
      return dispatch(setLocation([latitude, longitude]));
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    console.log('rendered');
  }, [userLocation]);

  return (
    <div className="bg-red-600">
      <button onClick={getUserLocation} type="button">
        Locate me{' '}
      </button>
      <div className="h-96 max-w-sm bg-black">
        {userLocation.length < 0 ? null : <Map userLocation={userLocation} />}
      </div>
    </div>
  );
};

export default FindVaccine;
