import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure: true,
});

export default cloudinary;


export async function uploadBase64Image(base64: string, folder: string) {
  const res = await cloudinary.uploader.upload(base64, { folder });
  return { url: res.secure_url, publicId: res.public_id };
}