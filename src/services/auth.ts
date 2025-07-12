import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

import { collection, query, where, addDoc, getDocs } from 'firebase/firestore';

import app, { db } from '../config/firebaseConfig';

// types
import { FormData as SignUpFormDataType } from '../components/auth/SignupForm';

const auth = getAuth(app);

export const createEmailPasswordUser = async (userData: SignUpFormDataType) => {
  const newUser = await createUserWithEmailAndPassword(
    auth,
    userData.email,
    userData.password,
  );

  await addDoc(collection(db, 'profiles'), {
    userId: newUser.user.uid,
    firstName: userData.firstName,
    lastName: userData.lastName,
    phone: userData.phone,
  });

  await sendEmailVerification(newUser.user);
};

export const loginEmailPasswordUser = async (
  email: string,
  password: string,
) => {
  // try {
  //   const user = await signInWithEmailAndPassword(auth, email, password);

  //   const profileQuery = query(
  //     collection(db, 'profiles'),
  //     where('userId', '==', user.user.uid),
  //   );
  //   const querySnapshot = await getDocs(profileQuery);
  //   return querySnapshot.docs[0].data();
  // } catch (error) {
  //   console.log(error);
  // }
  const user = await signInWithEmailAndPassword(auth, email, password);

  const profileQuery = query(
    collection(db, 'profiles'),
    where('userId', '==', user.user.uid),
  );

  return await getDocs(profileQuery);
};
