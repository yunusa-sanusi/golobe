import { getFirestore } from 'firebase/firestore';

import app from '../config/firebaseConfig';

const db = getFirestore(app);

export default db;
