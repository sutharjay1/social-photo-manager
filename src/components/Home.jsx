import React, { useEffect } from 'react';
import AddImageInput from './ForLogUser/AddImageInput';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import NavBar from './NavBar';

function Home() {
  // const navigate = useNavigate();
  // const isLogin = useSelector((state) => state.user.loginGoogleUser.isLogin);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user === null && isLogin === false) {
  //       navigate('/login');
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigate]);

  return (
    <>
      <div className="w-full h-screen flex items-start  justify-center ">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <NavBar />
          <AddImageInput />
        </div>
      </div>
    </>
  );
}

export default Home;
