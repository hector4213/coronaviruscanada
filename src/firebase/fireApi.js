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

// User should have max of 2 appointments
const checkMaxAppointments = async (userId) => {
  const db = firebase.firestore();
  const userRef = db.collection('users').doc(userId);
  const userData = await userRef.get();
  const numAppointments = userData.data();
  if (numAppointments.appts >= 2) {
    throw new Error('You have reached the maximum of  appointments');
  }
};

const createAppointment = async (obj) => {
  const db = firebase.firestore();

  try {
    await checkMaxAppointments(obj.userId);
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
    return console.log('something went wrong..', error);
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

const updateDisplayName = async (id, newName) => {
  const userRef = firebase.firestore().collection('users').doc(id);

  const snapShot = await userRef.get();

  if (snapShot.exists) {
    try {
      await userRef.set({
        displayName: newName,
      });
    } catch (error) {
      return console.log('something went wrong...', error);
    }
  }
  return newName;
};

export default {
  fetchAppProvinces,
  fetchAppRegions,
  createAppointment,
  fetchAppointments,
  deleteAppointment,
  updateDisplayName,
};
