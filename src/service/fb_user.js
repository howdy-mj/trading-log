import { getAuth, deleteUser } from 'firebase/auth';

/**
 * @description
 * 계정 관리
 * https://firebase.google.com/docs/auth/web/manage-users
 */

const auth = getAuth();
const user = auth.currentUser;

export const deleteAccount = () => {
  // TODO: 계정 삭제
  console.log(user);
  // deleteUser(user)
  //   .then(() => {
  //     // User deleted.
  //   })
  //   .catch((error) => {
  //     // An error ocurred
  //     // ...
  //   });
};
