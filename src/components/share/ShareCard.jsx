import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ShareCard = () => {
  const navigate = useNavigate();

  const { imageURLs, imageID, publicID, originalName, photoURLs } = useSelector(
    (state) => state.shareLink
  );

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="lg:min-w-fit md:min-w-[100%] min-w-[100%] grid grid-cols-2 md:grid-cols-3 gap-5 lg:mx-0 md:mx-0 mx-7 rounded-lg mt-5  ">
          {imageURLs.map((imageURL, index) => (
            <div
              className="w-full bg-white rounded-xl shadow-lg hover:shadow-xl transform transition hover:scale-[1.015]"
              key={publicID[index]}
            >
              <div className="w-full overflow-hidden rounded-xl rounded-b-none ">
                <img
                  className="w-full cursor-pointer  object-cover h-56"
                  src={`${imageURL}`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="flex lg:px-4 px-3 py-2  lg:gap-6 md:gap-4 gap-1  justify-start">
                <div className="flex items-center space-x-2 gap-3">
                  <img
                    className="w-8 rounded-full "
                    src={`${photoURLs}`}
                    alt="sara"
                    loading="lazy"
                  />
                  <h2 className="text-gray-800 font-semibold lg:text-sm md:text-sm text-sm cursor-pointer">
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

export default React.memo(ShareCard);
