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
      <div className="min-w-[85%] h-auto flex flex-col items-start justify-center px-8 py-4 mt-4 rounded-md backdrop-blur-md bg-rose-500/30">
        <div className="w-full flex items-center justify-between py-3 px-12">
          <h1 className="text-4xl font-bold">Upload Image</h1>
          <button onClick={handleAddImage}>Upload Image</button>
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
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
          />
        </div>

        <div className="w-full flex items-center justify-center py-3">
          <img
            src={`${imageURLs[imageURLs.length - 1]}`}
            alt={`${originalName[originalName.length - 1]}`}
            className="w-[300px] h-[300px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default AddImageInput;
