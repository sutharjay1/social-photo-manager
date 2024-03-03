import React, { useEffect } from 'react';
import AddImageInput from './ForLogUser/AddImageInput';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config.js';
import NavBar from './NavBar';

function Home() {
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, []);

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
