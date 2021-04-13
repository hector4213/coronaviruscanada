import firebase from 'firebase/app';
//  Fetch images for province grid + province codes

const fetchAppProvinces = async () => {
  const db = firebase.firestore();
  const data = await db.collection('provinces').get();
  const provincesData = data.docs.map((doc) => doc.data());
  return provincesData;
};

// Fetch region codes for province

const fetchAppRegions = async (province) => {
  const db = firebase.firestore();
  const data = await db.collection(province).get();
  const regionData = data.docs.map((doc) => doc.data());
  return regionData;
};

const createAppointment = async (obj) => {
  const db = firebase.firestore();

  try {
    await db.collection('appointments').add(obj);
    console.log('success!');
  } catch (error) {
    console.log('something went wrong..', error);
  }
};

const fetchAppointments = async (userId) => {
  const db = firebase.firestore();
  const appointmentsRef = db
    .collection('appointments')
    .where('userId', '==', userId);

  try {
    const data = await appointmentsRef.get();
    const appointments = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return appointments;
  } catch (error) {
    return console.log('something went wrong..', error); // handle error?
  }
};

const deleteAppointment = async (id) => {
  const db = firebase.firestore();
  const appointment = db.collection('appointments').doc(`${id}`);

  try {
    await appointment.delete();
    return id;
  } catch (error) {
    return console.log('something went wrong..', error);
  }
};

const updateDisplayName = async (name) => {
  const user = firebase.auth().currentUser;
  try {
    await user.updateProfile({
      displayName: name,
    });
    return name;
  } catch (error) {
    return console.log('something went wrong..', error);
  }
};

export default {
  fetchAppProvinces,
  fetchAppRegions,
  createAppointment,
  fetchAppointments,
  deleteAppointment,
  updateDisplayName,
};
