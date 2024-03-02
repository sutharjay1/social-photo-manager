import React from 'react';
import { useParams } from 'react-router';

const Profile = () => {
  const { name } = useParams();
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
