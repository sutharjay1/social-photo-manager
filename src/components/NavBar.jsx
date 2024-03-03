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
        <div className="lg:min-w-[65%] md:min-w-[95%] min-w-[95%] h-auto flex items-center justify-between  px-8 py-4 mt-4 rounded-md backdrop-blur-md bg-rose-700/80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link to={userSlug && `/home/${userSlug}`}>
            <div>
              <h1 className="text-3xl font-bold text-white">Photos</h1>
            </div>
          </Link>

          <div className="flex items-center justify-center  gap-5">
            <div>
              {isLogin && <button onClick={signOutUser}>signOut</button>}
            </div>
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
      </div>
    </>
  );
};

export default NavBar;
