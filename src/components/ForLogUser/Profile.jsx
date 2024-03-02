import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useUserImage from '../../hooks/useUserImage';
import { useSelector } from 'react-redux';
import useSignOut from '../../hooks/useSignOut';

const Profile = () => {
  const { name } = useParams();

  const { getData } = useUserImage();

  const { userID } = useSelector((state) => state?.user?.loginGoogleUser);
  const { imageID } = useSelector((state) => state?.userGallery?.imageID);

  useEffect(() => {
    getData(userID);
  }, [getData, userID]);

  const { userSlug, userName, email, photoURL, isLogin } = useSelector(
    (state) => state.user.loginGoogleUser
  );

  const { signOutUser } = useSignOut();
  return (
    <>
      <div className="w-full h-screen flex items-start justify-center ">
        <div className="w-full flex items-center justify-center">
          <div className="min-w-[85%] h-auto flex items-center justify-between px-8 py-4 mt-4 rounded-md backdrop-blur-md bg-rose-700/80">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Social Photo Manager
              </h1>
            </div>
            <div>
              {isLogin && <button onClick={signOutUser}>signOut</button>}
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
