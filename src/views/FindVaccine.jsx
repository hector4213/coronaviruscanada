import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalHospitals } from '../redux/ducks/mapSlice';

import Map from '../components/FindVaccine/Map';
import AppointmentModal from '../components/FindVaccine/AppointmentModal';
import HospitalList from '../components/FindVaccine/HospitalList';

const FindVaccine = () => {
  const { userLocation, mapResults, isModalOpen } = useSelector(
    (state) => state.map,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (userLocation) {
      dispatch(getLocalHospitals(userLocation));
    }
  }, [userLocation]);

  return (
    <div className="mt-4 w-full">
      <div className="p-4">
        <h1 className="text-4xl">Click the map to find your location</h1>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between md:p-4">
        <div className="p-4 h-96 w-screen z-30 shadow-xl rounded-lg md:max-w-2xl md:w-1/2">
          {userLocation.length < 0 ? null : (
            <Map userLocation={userLocation} mapResults={mapResults} />
          )}
        </div>
        <div className="md:w-1/2">
          <HospitalList hospitals={mapResults} />
          {isModalOpen && <AppointmentModal />}
        </div>
      </div>
    </div>
  );
};

export default FindVaccine;
