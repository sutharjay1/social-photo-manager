import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import getShareData from './getShareData';
import ShareCard from './ShareCard';
import { Link } from 'react-router-dom';
import ShareNavBar from './ShareNavBar';

const ShareLink = () => {
  const { userID, shareID } = useParams();

  const data = getShareData(userID, shareID);
  console.log(data);

  return (
    <>
      <div className="w-full h-screen flex items-start justify-center ">
        <div className="w-full flex flex-col items-center justify-center">
          <ShareNavBar />
          <div className="lg:min-w-[65%] md:min-w-[95%] min-w-[95%] h-auto flex items-center justify-between  lg:px-8 md:px-6 px-3 lg:py-4 md:py-3 py-1 mt-9 lg:mx-auto md:mx-auto mx-6 rounded-md backdrop-blur-md bg-rose-700/80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="w-full flex items-center justify-center  gap-5">
              <ShareCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareLink;
