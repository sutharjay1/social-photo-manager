import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC2brLg5wC2WXXXZVWmlC9kPuBbu_tVCQc',

  authDomain: 'social-photo-manager-72737.firebaseapp.com',

  projectId: 'social-photo-manager-72737',

  storageBucket: 'social-photo-manager-72737.appspot.com',

  messagingSenderId: '726017155854',

  appId: '1:726017155854:web:42b50524a48adfca64ad5f',

  measurementId: 'G-6EQWQB9Q4Z',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
