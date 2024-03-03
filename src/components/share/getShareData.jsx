import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../Firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { getDataByShare } from '../../store/shareSlice';

const getUserPhotoDocIDs = async (userID) => {
  const dispatch = useDispatch();

  const q = query(collection(db, 'users', userID, 'userPhotos'));
  const querySnapshot = await getDocs(q);

  const imageURLs = querySnapshot.docs.map((doc) => doc.data().imageURLs);
  const imageID = querySnapshot.docs.map((doc) => doc.id);
  const publicID = querySnapshot.docs.map((doc) => doc.data().publicID);
  const originalName = querySnapshot.docs.map((doc) => doc.data().originalName);

  const userPhotosRef = doc(db, 'users', userID);

  try {
    const userDoc = await getDoc(userPhotosRef);

    if (userDoc.exists()) {
      dispatch(
        getDataByShare({
          imageURLs: imageURLs,
          imageID: imageID,
          publicID: publicID,
          originalName: originalName,
          photoURLs: userDoc.data().photoURL,
        })
      );
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting documents:', error);
  }
};

export default getUserPhotoDocIDs;
