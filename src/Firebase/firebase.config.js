import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZHIOKMn-LFXjiKDxUoOyD4b87ONzRBmw',
  authDomain: 'photo-manager-f62bf.firebaseapp.com',
  projectId: 'photo-manager-f62bf',
  storageBucket: 'photo-manager-f62bf.appspot.com',
  messagingSenderId: '1048925354053',
  appId: '1:1048925354053:web:d0ed01fa4aeb7c135dcb2c',
  measurementId: 'G-W2VW8TYFWX',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth();
