import { collection, doc, getDocs } from '@firebase/firestore';
import { db } from '../Firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { getDataOfUser } from '../store/userRetrievedData';
import { useEffect } from 'react';

const useGetUserImage = (userID) => {
  const dispatch = useDispatch();

  const getData = async (userID) => {
    try {
      const userPhotosRef = collection(db, 'users', userID, 'userPhotos');
      const snap = await getDocs(userPhotosRef);

      const imageURLs = snap.docs.map((doc) => doc.data().imageURLs);
      const imageIDs = snap.docs.map((doc) => doc.id);

      const publicID = snap.docs.map((doc) => doc.data().publicID);

      const originalName = snap.docs.map((doc) => doc.data().originalName);

      dispatch(
        getDataOfUser({
          imageURLs: imageURLs,
          imageID: imageIDs,
          publicID: publicID,
          originalName: originalName,
        })
      );
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };

  // return { getData };
  useEffect(() => {
    getData(userID);
  }, [userID]);
};

export default useGetUserImage;
