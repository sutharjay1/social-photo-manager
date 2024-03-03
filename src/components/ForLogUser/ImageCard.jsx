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

  const handleShareLink = (index, e) => {
    const { origin } = new URL(window.location.href);
    window.navigator.clipboard
      .writeText(`${origin}/share/${userID}/${imageID[index]}`)
      .then(() => {
        e.target.innerText = 'Copied!';
        setTimeout(() => {
          e.target.innerText = 'Share';
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  return (
    <>
      {imageURLs.map((imageURL, index) => (
        <div
          className="w-full  bg-white rounded-xl shadow-lg transform  hover:shadow-2xl  transition hover:scale-[1.015] cursor-default"
          key={publicID[index]}
        >
          <div className="w-full overflow-hidden rounded-xl rounded-b-none">
            <img
              className="w-full  object-cover h-56 disabled:s"
              src={`${imageURL}`}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="flex items-center  px-4 py-2 justify-between">
            <div className="flex items-center space-x-2 gap-3 overflow-hidden">
              <img
                className="w-8 rounded-full"
                src={`${photoURL}`}
                alt="sara"
                loading="lazy"
              />
              <h2 className="text-gray-800 lg:block md:block hidden font-semibold lg:truncate md:truncate sm:truncate truncate  cursor-pointer">
                {originalName[index]}
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-white bg-gray-950/95 hover:bg-gray-900/95 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 backdrop-blur-md"
                onClick={(e) => handleShareLink(index, e)}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default React.memo(ImageCard);
