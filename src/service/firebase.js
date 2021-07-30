import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const firebaseStore = () => {
  firebase.analytics();
};

export default firebaseStore;

/**
 * 구글 로그인
 * https://firebase.google.com/docs/auth/web/google-signin?hl=ko
 */

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignInPopup = async () => {
  await auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log('result', result);
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};

export const googleSignOut = async () => {
  await auth
    .signOut()
    .then(() => {})
    .catch((error) => {
      console.log('error', error);
    });
};
