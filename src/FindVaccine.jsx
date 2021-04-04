import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalHospitals } from './redux/ducks/mapSlice';

import Map from './components/FindVaccine/Map';
import AppointmentModal from './components/FindVaccine/AppointmentModal';
import HospitalList from './components/FindVaccine/HospitalList';

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
    <div className="mt-4 md:flex flex-row w-screen">
      <div className="h-96 max-w-sm z-30 p-4 shadow-xl rounded-lg md:max-w-xl md:flex-1">
        {userLocation.length < 0 ? null : (
          <Map userLocation={userLocation} mapResults={mapResults} />
        )}
      </div>
      <div className="p-4">
        <HospitalList hospitals={mapResults} />
        {isModalOpen && <AppointmentModal />}
      </div>
    </div>
  );
};

export default FindVaccine;
