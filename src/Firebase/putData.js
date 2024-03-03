// putData.js
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.config.js';
import { useDispatch, useSelector } from 'react-redux';
import { addImageID } from '../store/userGallery.js';
import { useEffect } from 'react';

const putData = () => {
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

  const addData = async ({ imageURLs, publicID, originalName, createdAt }) => {
    const docRef = await addDoc(collection(userRef, 'userPhotos'), {
      imageURLs: imageURLs,
      publicID: publicID,
      originalName: originalName,
      createdAt: createdAt,
    }).then((data) => {
      dispatch(
        addImageID({
          imageID: data.id,
          publicID: data.publicID,
          originalName: data.originalName,
          createdAt: data.createdAt,
        })
      );
    });

  };

  return { addData };
};

export default putData;
