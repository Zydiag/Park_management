import uploadFilesOnCloudinary from '@/lib/cloudinary';
import { TryCatch, getUserAfterAuth } from '@/lib/features';
import handleError from '@/lib/helper';
import connectDB from '@/lib/mongoDB';
import { Aerk } from '@/models/parkModel';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export const POST = TryCatch(async (req: NextRequest) => {
  await connectDB();
  const user = await getUserAfterAuth(req);
  const formData = await req.formData();
  const loc = formData.get('location') as string;
  const park_name = formData.get('park_name');
  const about = formData.get('about');
  const phone = formData.get('phone');
  const address = formData.get('phone');
  const instagram = formData.get('instagram');
  const x = formData.get('x');
  const facebook = formData.get('facebook');
  const mail = formData.get('mail');
  const location_string = JSON.parse(loc);
  const location_number: Number[] = [
    parseFloat(location_string[0]),
    parseFloat(location_string[1]),
  ];
  if (!park_name || !loc) return handleError('Missing parameters');
  const banner_photo_file = formData.getAll('banner_photo') as File[];
  const cover_photo_file = formData.get('cover_photo') as File;
  interface image {
    public_id?:string;
    url?:string
  }
  let banner_photo: image[] = [];
  let cover_photo: image[] = [];
  const generatedId = new mongoose.Types.ObjectId();
  // if ([cover_photo_file].length > 0) {
  //   cover_photo = await uploadFilesOnCloudinary(
  //     [cover_photo_file],
  //     `park/${generatedId}/cover_photo`
  //   );
  // }
  // if (banner_photo_file.length > 0) {
  //   banner_photo = await uploadFilesOnCloudinary(
  //     banner_photo_file,
  //     `park/${generatedId}/banner_photo`
  //   );
  // }

  console.log(cover_photo);
  console.log(banner_photo);

  await Aerk.create({
    _id: generatedId,
    park_name,
    about,
    phone,
    address,
    social_media: {
      instagram: instagram,
      facebook: facebook,
      x: x,
      mail: mail,
    },
    location: {
      type: 'Point',
      coordinates: location_number,
    },
    banner_photo: banner_photo.length>0?banner_photo:[],
    cover_photo: cover_photo.length > 0 ? cover_photo[0] : {},
    park_added_by: user.id,
  });
  return NextResponse.json({
    status: true,
    message: 'Park added successfully',
  });
});
