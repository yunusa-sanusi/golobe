import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { collection, query, where, addDoc, getDocs } from 'firebase/firestore';

import app from '../config/firebaseConfig';
import db from './db';

// types
import { FormData as SignUpFormDataType } from '../components/auth/SignupForm';

const auth = getAuth(app);

export const createEmailPasswordUser = async (userData: SignUpFormDataType) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const loginEmailPasswordUser = async (
  email: string,
  password: string,
) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    const profileQuery = query(
      collection(db, 'profiles'),
      where('userId', '==', user.user.uid),
    );
    const querySnapshot = await getDocs(profileQuery);
    return querySnapshot.docs[0].data();
  } catch (error) {
    console.log(error);
  }
};
