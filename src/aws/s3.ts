import S3 from "aws-sdk/clients/s3";
import alert from "aws-sdk/lib/maintenance_mode_message";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

alert.suppress = true;

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

// upload to s3
export function uploadFile(file: Express.Multer.File, filename: string) {
  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: file.buffer,
    Key: filename
  };
  return s3.upload(uploadParams).promise();
}

// download from s3
export function getFileStream(fileKey: string) {
  const downloadParams = {
    Key: fileKey,
    Bucket: process.env.AWS_BUCKET_NAME
  };

  return s3.getObject(downloadParams).createReadStream();
}

export function deleteFile(fileKey: string) {
  const deleteParams = {
    Key: fileKey,
    Bucket: process.env.AWS_BUCKET_NAME
  };

  return s3.deleteObject(deleteParams).promise();
}
