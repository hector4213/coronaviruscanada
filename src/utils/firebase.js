const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'covidcanada-55475.firebaseapp.com',
  databaseURL: 'https://covidcanada-55475-default-rtdb.firebaseio.com',
  projectId: 'covidcanada-55475',
  storageBucket: 'covidcanada-55475.appspot.com',
  messagingSenderId: '732124170912',
  appId: '1:732124170912:web:7532dc8c337c320ad997c5',
  measurementId: 'G-M9QE4N7R11',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
