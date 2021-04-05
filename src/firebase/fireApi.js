import firebase, { auth } from './firebase';
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
  const login = await auth.signInWithEmailAndPassword(email, password);
  return login;
};

export default {
  fetchAppProvinces,
  fetchAppRegions,
  signup,
  login,
};
