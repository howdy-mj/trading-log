import { firebaseAuth, googleProvider } from './firebase';

import { setItem } from '~utils/storage';

import Alert from '~components/Alert';

/**
 * @reference
 * https://github.com/firebase/firebaseui-web
 * https://firebase.google.com/docs/database/rest/auth
 * https://firebase.google.com/docs/auth/web/google-signin?hl=ko
 *
 */

export const googleSignIn = async () => {
  await firebaseAuth
    .signInWithPopup(googleProvider)
    // .signInWithRedirect(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      // console.log('result', result);
      const credential = result.credential;
      const accessToken = credential.accessToken;
      setItem('access_token', accessToken);

      const user = result.user;
      return user;
    })
    .catch((error) => {
      // TODO: 실패 alert 문구
      return <Alert />;
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
    });
};

export const googleSignOut = async () => {
  await firebaseAuth
    .signOut()
    .then(() => {})
    .catch((error) => {
      console.log('error', error);
    });
};
