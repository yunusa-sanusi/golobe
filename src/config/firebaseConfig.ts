import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const envVar = import.meta.env;

const firebaseConfig = {
  apiKey: envVar.VITE_API_KEY,
  authDomain: envVar.VITE_AUTH_DOMAIN,
  projectId: envVar.VITE_PROJECT_ID,
  storageBucket: envVar.VITE_STORAGE_BUCKET,
  messagingSenderId: envVar.VITE_MESSAGE_SENDER_ID,
  appId: envVar.VITE_APP_ID,
  measurementId: envVar.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
