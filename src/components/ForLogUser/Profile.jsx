import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useGetUserImage from '../../hooks/useGetUserImage';
import { useDispatch, useSelector } from 'react-redux';
import useSignOut from '../../hooks/useSignOut';
import ImageCard from './ImageCard';
import { Link } from 'react-router-dom';
import { setIsDataRetrieved } from '../../store/userRetrievedData';
import NavBar from '../NavBar';
import { Dropdown } from 'antd';

const Profile = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  dispatch(setIsDataRetrieved(true));

  const { user } = useSelector((state) => state?.user);

  const { userID } = useSelector((state) => state?.user?.loginGoogleUser);
  const { imageID } = useSelector((state) => state?.userGallery?.imageID);

  const { isDataRetrieved } = useSelector((state) => state?.userRetrievedData);

  if (isDataRetrieved) {
    useGetUserImage(userID);
  }

  const { userSlug, userName, email, photoURL, isLogin } = useSelector(
    (state) => state.user.loginGoogleUser
  );

  const { signOutUser } = useSignOut();

  return (
    <>
      <div className="w-full h-screen flex items-start justify-center ">
        <div className="w-full flex flex-col items-center justify-center">
          <NavBar />
          <div className="lg:min-w-[65%] md:min-w-[95%] min-w-[95%] h-auto flex items-center justify-between  lg:px-8 md:px-6 px-3 lg:py-4 md:py-3 py-1  mt-9 lg:mx-6 md:mx-5 mx-6 rounded-md backdrop-blur-md bg-zinc-700/80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="w-full flex items-center justify-center  gap-5 ">
              <div className="w-full flex flex-col items-center justify-center gap-4 mt-6">
                <div className="lg:min-w-fit md:min-w-fit min-w-fit grid grid-cols-2 md:grid-cols-3 gap-5 lg:mx-0 md:mx-0 mx-2 rounded-lg  mt-0 mb-5 ">
                  <ImageCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
