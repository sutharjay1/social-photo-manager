import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogleUser } from '../store/userSlice';
import userGallery from '../store/userGallery';

const useSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.loginGoogleUser.isLogin);

  const signOutUser = async () => {
    await signOut(auth);
    navigate('/');
    dispatch(loginGoogleUser({ isLogin: false }));
    dispatch(
      loginGoogleUser({
        useSlug: null,
        userName: null,
        email: null,
        photoURL: null,
        userID: null,
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
  };

  return { signOutUser };
};

export default useSignOut;
