import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserImages } from '../../store/userGallery';

function AddImageInput() {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');

  const handleGetImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'social-photo-manager');
    data.append('cloud_name', 'jaysuthar');

    fetch('https://api.cloudinary.com/v1_1/jaysuthar/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          addUserImages({
            imageURLs: data?.secure_url,
            publicID: data?.public_id,
            createdAt: data?.created_at,
            originalName: data?.original_filename,
          })
        );
        console.log(data);
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Upload Image</h1>
      <input
        type="file"
        onChange={handleGetImage}
      />
      <button onClick={handleAddImage}>Upload Image</button>
    </div>
  );
}

export default AddImageInput;
