import React, { useEffect } from 'react';
import AddImageInput from './ForLogUser/AddImageInput';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function Home() {
  // const navigate = useNavigate();
  // const isLogin = useSelector((state) => state?.user?.loginGoogleUser?.isLogin);

  // useEffect(() => {
  //   if (isLogin) {
  //     navigate('/home');
  //   } else {
  //     navigate('/');
  //   }
  // }, [isLogin]);

  return (
    <>
      <div className="w-full h-screen flex items-start justify-center bg-fuchsia-500">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-bold">Home</h1>
          <AddImageInput />
        </div>
      </div>
    </>
  );
}

export default Home;
