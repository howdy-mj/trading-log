import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { setItem } from '~utils/storage';

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
// const firebaseStore = () => {
//   firebase.analytics();
// };
// export default firebaseStore;

/** database */
export const firebaseDatabase = firebase.database;

/**
 * 인증
 * https://github.com/firebase/firebaseui-web
 * // https://firebase.google.com/docs/database/rest/auth
 */

/**
 * 구글 로그인
 * https://firebase.google.com/docs/auth/web/google-signin?hl=ko
 */

export const firebaseAuth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = async () => {
  await firebaseAuth
    .signInWithPopup(provider)
    // .signInWithRedirect(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      // console.log('result', result);
      const credential = result.credential;
      const accessToken = credential.accessToken;

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

// export const getCredential = (token) => {
//   console.log('token', token);
//   if (token !== undefined) {
//     firebaseAuth.signInWithCredential(token).then((user) => {
//       console.log('user', user);
//     });
//   }
// };

export const googleSignOut = async () => {
  await firebaseAuth
    .signOut()
    .then(() => {})
    .catch((error) => {
      console.log('error', error);
    });
};

/**
 * 계정 관리
 * https://firebase.google.com/docs/auth/web/manage-users
 */
