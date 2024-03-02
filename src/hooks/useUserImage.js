import { collection, getDocs } from '@firebase/firestore';
import { db } from '../Firebase/firebase.config.js';
import { useDispatch } from 'react-redux';
import { getDataOfUser } from '../store/userRetrievedData.js';

const useUserImage = () => {
  const dispatch = useDispatch();

  const getData = async (userID) => {
    try {
      const result = collection(db, 'users', userID, 'userPhotos');
      const snap = await getDocs(userPhotosRef);

      dispatch(
        getDataOfUser({
          imageURLs: snap?.docs?.flatMap((doc) => doc.data().imageURLs),
          imageID: snap?.docs?.map((doc) => doc.id),
        })
      );
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };

  return { getData };
};

export default useUserImage;
