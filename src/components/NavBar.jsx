import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useSignOut from '../hooks/useSignOut';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { userSlug, userName, email, photoURL, isLogin } = useSelector(
    (state) => state.user.loginGoogleUser
  );

  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const toggleProfile = () => {
    setIsProfileClicked(!isProfileClicked);
  };

  const { signOutUser } = useSignOut();

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="min-w-[85%] h-auto flex items-center justify-between px-8 py-4 mt-4 rounded-md backdrop-blur-md bg-rose-700/80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Social Photo Manager
            </h1>
          </div>
          <div>{isLogin && <button onClick={signOutUser}>signOut</button>}</div>
          <div className="relative">
            {/* <button onClick={toggleProfile}> */}
            <Link to={`/user/profile/${userSlug}`}>
              <img
                src={`${photoURL}`}
                className="w-12 h-12 rounded-full"
              />
              {isLogin && (
                <div className="w-[9px] h-[9px] absolute bottom-[2px] right-[2px] rounded-full bg-emerald-500"></div>
              )}
            </Link>
            {/* </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
