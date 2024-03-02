import { collection, doc, getDocs } from '@firebase/firestore';
import { db } from '../Firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { getDataOfUser } from '../store/userRetrievedData';

const useUserImage = () => {
  const dispatch = useDispatch();

  const getData = async (userID) => {
    try {
      const userPhotosRef = collection(db, 'users', userID, 'userPhotos');
      const snap = await getDocs(userPhotosRef);

      const imageURLs = snap.docs.map((doc) => doc.data().imageURLs);
      const imageIDs = snap.docs.map((doc) => doc.id);

      dispatch(
        getDataOfUser({
          imageURLs: imageURLs,
          imageID: imageIDs,
        })
      );
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };

  return { getData };
};

export default useUserImage;
