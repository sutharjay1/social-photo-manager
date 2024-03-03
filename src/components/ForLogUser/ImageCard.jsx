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

  const handleShareLink = (index) => {
    navigate(`/share/${userID}/${imageID[index]}`);
  };

  return (
    <>
      {imageURLs.map((imageURL, index) => (
        <div
          className="w-full bg-white rounded-xl shadow-lg transform transition hover:shadow-2xl hover:scale-95 transform transition hover:scale-[1.015]"
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
    </>
  );
};

export default React.memo(ImageCard);
