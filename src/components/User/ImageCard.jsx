import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ImageCard = () => {
  const navigate = useNavigate();

  const { imageURLs, imageID, publicID, originalName } = useSelector(
    (state) => state.userRetrievedData
  );

  const { userID, userSlug, userName, email, photoURL, isLogin } = useSelector(
    (state) => state.user.loginGoogleUser
  );

  // const generateLink = window.location.href + '/' + imageID;

  const handleShareLink = (index) => {
    navigate(`/share/${userID}/${imageID[index]}`);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-4 mt-6">
        {/* <div className="lg:min-w-full md:min-w-[100%] min-w-[100%] grid grid-rows-5 grid-flow-col gap-4 lg:mx-0 md:mx-0 mx-7 lg:px-8 md:px-8 px-1 py-4 mt-4 rounded-md backdrop-blur-md bg-rose-700/80 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"> */}
        <div className="lg:min-w-full md:min-w-[100%] min-w-[100%] grid lg:grid-row-3 md:grid-flex-col grid-cols-1 grid-flow-row gap-7 lg:mx-0 md:mx-0 mx-7 rounded-lg mt-5  shadow-xl">
          {imageURLs.map((imageURL, index) => (
            <div
              className="w-full bg-white rounded-xl shadow-lg transform transition hover:shadow-2xl hover:scale-95 transform transition hover:scale-105"
              key={publicID[index]}
              onClick={() => handleShareLink(index)}
            >
              <div className="w-full overflow-hidden rounded-xl rounded-b-none">
                <img
                  className="w-full cursor-pointer  object-cover h-56"
                  src={`${imageURL}`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="flex px-4 py-2 justify-between">
                <div className="flex items-center space-x-2 gap-3 overflow-hidden">
                  <img
                    className="w-8 rounded-full"
                    src={`${photoURL}`}
                    alt="sara"
                    loading="lazy"
                  />
                  <h2 className="text-gray-800 font-semibold lg:truncate md:truncate sm:truncate truncate  cursor-pointer">
                    {originalName[index]}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(ImageCard);
