import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from './redux/ducks/mapSlice';
import Map from './components/FindVaccine/Map';

const FindVaccine = () => {
  const { userLocation } = useSelector((state) => state.map);
  const dispatch = useDispatch();

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(setLocation({ latitude, longitude }));
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    if (!userLocation.lat || !userLocation.long) getUserLocation();
  }, [userLocation]);

  return (
    <div className="bg-red-600">
      <div className="h-96 max-w-sm bg-black">
        {Object.values(userLocation).every((point) => point !== null) && (
          <Map userLocation={userLocation} />
        )}
      </div>
    </div>
  );
};

export default FindVaccine;
