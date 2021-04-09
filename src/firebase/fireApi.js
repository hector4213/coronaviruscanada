import firebase from 'firebase/app';
import { auth } from './firebase';
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

const signup = async (email, password) => {
  const user = await auth.createUserWithEmailAndPassword(email, password);
  return user;
};

const login = async (email, password) => {
  const loginUser = await auth.signInWithEmailAndPassword(email, password);
  return loginUser;
};

const createAppointment = async (obj) => {
  const db = firebase.firestore();

  try {
    await db.collection('appointments').add(obj);
    console.log('success!');
  } catch (error) {
    console.log('error occured on appointment fetch', error);
  }
};

const fetchAppointments = async (userId) => {
  const db = firebase.firestore();
  const appointmentsRef = db
    .collection('appointments')
    .where('userId', '==', userId);

  try {
    const data = await appointmentsRef.get();
    const appointments = data.docs.map((doc) => doc.data());
    return appointments;
  } catch (error) {
    return console.log('an error occured', error); // handle error?
  }
};

export default {
  fetchAppProvinces,
  fetchAppRegions,
  signup,
  login,
  createAppointment,
  fetchAppointments,
};
