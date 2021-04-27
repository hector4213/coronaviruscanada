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
    <div className="w-full flex flex-col">
      <h1 className="text-2xl  p-4 md:text-4xl font-thin text-center">
        Click the map to find your location
      </h1>
      <div className="w-full rounded-lg shadow-2xl md:flex-row">
        <div className="bg-white p-2 mb-2 rounded-lg shadow-xl">
          {userLocation.length < 0 ? null : (
            <Map userLocation={userLocation} mapResults={mapResults} />
          )}
        </div>
        <div className="w-full">
          <HospitalList hospitals={mapResults} />
          {isModalOpen && <AppointmentModal />}
        </div>
      </div>
    </div>
  );
};

export default FindVaccine;
