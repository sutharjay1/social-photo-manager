// useAddImage.js
import { useDispatch, useSelector } from 'react-redux';
import { addUserImages } from '../store/userGallery.js';
import { useEffect } from 'react';
import putData from '../Firebase/putData.js';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../Firebase/firebase.config.js';

const useAddImage = (image) => {
  const dispatch = useDispatch();

  const { imageURLs, publicID, originalName, createdAt } = useSelector(
    (state) => state.userGallery
  );

  const { addData } = putData(imageURLs);

  const handleAddImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'social-photo-manager');
    data.append('cloud_name', 'photo-manager');

    fetch('https://api.cloudinary.com/v1_1/photo-manager/image/upload', {
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
        addData(data?.secure_url);
      })
      .then(async () => {});
  };

  return { handleAddImage };
};

export default useAddImage;
