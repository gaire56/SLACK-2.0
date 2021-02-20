import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA3WZOqZ5hq3zSfkYhZnCABgID_Y2mPzgk',
  authDomain: 'slack-clone-e8d7f.firebaseapp.com',
  projectId: 'slack-clone-e8d7f',
  storageBucket: 'slack-clone-e8d7f.appspot.com',
  messagingSenderId: '140581541855',
  appId: '1:140581541855:web:710b64a911d296b1cc566a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
