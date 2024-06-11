// lib/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
async function uploadFilesOnCloudinary(image: File[], folder: string) {
  interface ImgUpload {
    url?: string;
    public_id?: string;
  }
  const dataSent: ImgUpload[] = [];
  const allPromises = [];
  try {
    for (let i = 0; i < image.length; i++) {
      const file = image[i];
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      allPromises.push(
        new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'auto',
              folder: folder,
            },
            (err, result) => {
              if (err) {
                return reject(err);
              }
              dataSent.push({ url: result?.url, public_id: result?.public_id });
              return resolve(result);
            }
          );
          uploadStream.end(buffer);
        })
      );
    }
    await Promise.all(allPromises);
    return dataSent;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
export default uploadFilesOnCloudinary;
