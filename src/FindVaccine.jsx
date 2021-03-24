import { useEffect } from 'react';
import Map from './components/FindVaccine/Map';

const FindVaccine = () => {
  // const [location, setLocation] = useState({
  //   lat: null,
  //   long: null,
  // });

  useEffect(() => {
    // const { lat, long } = location;

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);

  return (
    <div className="bg-black">
      <Map />
    </div>
  );
};

export default FindVaccine;
