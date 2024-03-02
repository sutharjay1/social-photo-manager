// putData.js
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.config.js';
import { useDispatch, useSelector } from 'react-redux';
import { addImageID } from '../store/userGallery.js';
import { useEffect } from 'react';

const putData = (imageURLs) => {
  const dispatch = useDispatch();

  const { userID, userName, email, photoURL, userSlug } = useSelector(
    (state) => state.user.loginGoogleUser
  );

  const userRef = doc(db, 'users', userID);

  const updatingUserInfo = async () => {
    try {
      await setDoc(
        userRef,
        {
          userSlug: userSlug,
          userName: userName,
          email: email,
          photoURL: photoURL,
          userID: userID,
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updatingUserInfo();
  }, [userSlug, userName, email, photoURL, userID]);

  const addData = async ({
    imageURLs,
    originalName,
    createdAt,
    imageID,
    publicID,
  }) => {
    const docRef = await addDoc(collection(userRef, 'userPhotos'), {
      imageURLs: imageURLs,
      originalName: originalName,
      createdAt: createdAt,
      imageID: imageID,
      publicID: publicID,
    });
    dispatch(addImageID({ imageID: docRef.id }));
    console.log('Document written with ID: ', docRef.id);
  };
  return { addData };
};

export default putData;
