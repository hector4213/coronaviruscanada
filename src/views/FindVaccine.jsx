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
    <div className="w-full p-4 md:grid grid-cols-2 gap-x-4">
      <h1 className="text-3xl col-span-full p-4 md:text-4xl font-medium">
        Click the map to find your location
      </h1>
      <div className="flex items-center h-full z-30 bg-white p-2 mb-2 rounded-lg shadow-xl">
        {userLocation.length < 0 ? null : (
          <Map userLocation={userLocation} mapResults={mapResults} />
        )}
      </div>
      <div className="">
        <HospitalList hospitals={mapResults} />
        {isModalOpen && <AppointmentModal />}
      </div>
    </div>
  );
};

export default FindVaccine;
