import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment, setError } from '../../redux/ducks/userSlice';
import { closeModal } from '../../redux/ducks/mapSlice';

const AppointmentModal = () => {
  // Local State for input fields
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const { selectedHospital } = useSelector((state) => state.map);
  const { currentUser, isFieldsError, errorMessage } = useSelector(
    (state) => state.user,
  );

  const handleApptSubmit = async () => {
    const newAppointment = {
      userId: currentUser.id,
      location: selectedHospital.name,
      time,
      date,
      phone: selectedHospital.fields.phone,
    };

    if (!time || !date) {
      dispatch(setError('Please complete all fields')); //  TODO: Put modal state in user
    } else {
      dispatch(createAppointment(newAppointment));
      dispatch(closeModal());
    }
  };

  const handleFieldChange = (e) => {
    if (e.target.name === 'date') {
      setDate(e.target.value);
    } else if (e.target.name === 'time') {
      setTime(e.target.value);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Your Appointment at {selectedHospital.name}
              </h3>
              {isFieldsError && <h3 className="bg-red-600">{errorMessage}</h3>}
              <button
                type="button"
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => dispatch(closeModal())}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="my-4 flex flex-col ">
                <p>{selectedHospital.name}</p>
                <p>{selectedHospital.fields.address}</p>
                <p>{selectedHospital.fields.city}</p>
                <p>{selectedHospital.fields.phone}</p>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => handleFieldChange(e)}
                  name="date"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => handleFieldChange(e)}
                  name="time"
                />
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => dispatch(closeModal())}
              >
                Close
              </button>
              <button
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleApptSubmit}
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default AppointmentModal;
