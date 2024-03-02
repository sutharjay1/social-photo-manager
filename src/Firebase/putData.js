// putData.js
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.config.js';
import { useDispatch, useSelector } from 'react-redux';
import { addImageID } from '../store/userGallery.js';
import { useEffect } from 'react';

const putData = (imageURLs) => {
  const dispatch = useDispatch();

  const addData = async (imageURLs) => {
    const docRef = await addDoc(collection(db, 'users'), {
      imageURLs: imageURLs,
    });
    dispatch(addImageID({ imageID: docRef.id }));
    console.log('Document written with ID: ', docRef.id);
  };
  return { addData };
};

export default putData;
