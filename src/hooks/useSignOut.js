import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogleUser } from '../store/userSlice';
import userGallery from '../store/userGallery';
import { getDataOfUser } from '../store/userRetrievedData';

const useSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.loginGoogleUser.isLogin);

  const { imageURLs, publicID, originalName, createdAt, imageID } = useSelector(
    (state) => state.userGallery
  );

  const signOutUser = async () => {
    await signOut(auth);
    navigate('/');
    dispatch(loginGoogleUser({ isLogin: false }));
    dispatch(
      loginGoogleUser({
        userSlug: null,
        userName: null,
        email: null,
        photoURL: null,
        userID: null,
        isLogin: false,
      })
    );

    dispatch(
      userGallery({
        imageURLs: [],
        publicID: [],
        originalName: [],
        createdAt: [],
        imageID: [],
      })
    );

    dispatch(
      getDataOfUser({
        imageURLs: [],
        publicID: [],
        originalName: [],
        createdAt: [],
        imageID: [],
      })
    );
  };

  return { signOutUser };
};

export default useSignOut;
