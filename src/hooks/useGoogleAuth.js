import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogleUser } from '../store/userSlice.js';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const useGoogleAuth = () => {
  const dispatch = useDispatch();

  const provider = new GoogleAuthProvider();

  const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);

    const slug = response.user.email.substring(
      0,
      response.user.email.indexOf('@')
    );

    dispatch(
      loginGoogleUser({
        userSlug: slug,
        userName: response.user.displayName,
        email: response.user.email,
        photoURL: response.user.photoURL,
        userID: response.user.uid,
        isLogin: true,
      })
    );
  };

  return { logGoogleUser };
};

export default useGoogleAuth;
