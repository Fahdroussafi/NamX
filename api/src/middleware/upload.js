let streamifier = require('streamifier');
import fs from 'fs';
import { getApp } from 'firebase/app';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
 //config cloudflare
});

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

// export const upload = async (file) => {
//   const firebaseApp = getApp();
//   const storage = getStorage(firebaseApp);
//   const storageRef = ref(storage);
//   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//   const imagesRef = ref(storage, `/cars/${file.originalname}`);
//   try {
//     await uploadBytes(imagesRef, file.buffer);
//     let url = await getDownloadURL(imagesRef);
//     return url;
//   } catch (err) {
//     console.log(err);
//   }
// };
export const upload = async (file) => {
  return new Promise((resolve, reject) => {

    let cld_upload_stream = cloudinary.uploader.upload_stream(
     {
       folder: "cars"
     },
     (error, result) => {

       if (result) {
         resolve(result);
       } else {
         reject(error);
        }
      }
    );

    streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
  });
};

export const multiUpload = async (files) => {
  console.log({ filesss: files });
  if (files && files.length > 0) {
    try {
      let urls = await Promise.all(
        files.map(async (file) => {
          return await upload(file);
        })
      );
      return urls.map(({url}) => {
        console.log({ src: url });
        return { src: url };
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const deleteImage = async (url) => {
  const storage = getStorage();

  if (url) {
    const desertRef = ref(storage, url);
    if (desertRef) {
      deleteObject(desertRef)
        .then(() => {
          console.log('File deleted successfully');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } else {
    console.log('File not found');
  }
};
