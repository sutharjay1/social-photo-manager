import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserImages } from '../../store/userGallery';
import useAddImage from '../../hooks/useAddImage';
import putData from '../../Firebase/putData';

function AddImageInput() {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');

  const { imageURLs, originalName } = useSelector((state) => state.userGallery);

  const handleGetImage = (e) => {
    setImage(e.target.files[0]);
  };

  const { handleAddImage } = useAddImage(image);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 mt-6 ">
      <div className="lg:min-w-[65%] md:min-w-[95%] min-w-[95%] h-auto flex flex-col items-start justify-center lg:mx-auto md:auto mx-4 lg:px-8 md:px-8 px-1 py-4 mt-4 rounded-md backdrop-blur-md bg-zinc-700/80 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <div className="w-full flex items-center justify-between py-3 px-12">
          <h1 className="text-3xl font-bold ">Upload Image</h1>
          {image.length === 0 ? (
            <button
              onClick={handleAddImage}
              disabled
              className="cursor-not-allowed"
            >
              Upload Image
            </button>
          ) : (
            <button
              onClick={handleAddImage}
              className="text-white bg-gray-950 hover:bg-gray-950/95 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Upload Image
            </button>
          )}
        </div>
        <div className="w-full flex items-start justify-center px-5 py-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleGetImage}
            multiple={true}
            className="file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-zinc-800
      hover:file:bg-violet-100"
          />
        </div>

        <div className="w-full flex items-center justify-center py-3">
          {imageURLs.length > 0 && (
            <img
              src={`${imageURLs[imageURLs.length - 1]}`}
              alt={`${originalName[originalName.length - 1]}`}
              className="w-[300px] h-[300px] object-cover rounded-md"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AddImageInput;
