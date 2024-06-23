import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import { useAppStore } from "../store";

export const awsS3Client = () => {
  const { authData } = useAppStore.getState().userState;

  if (!authData) {
    return null;
  }

  return new S3Client({
    region: authData.region,
    credentials: {
      accessKeyId: authData.accessId,
      secretAccessKey: authData.secretKey,
    },
  });
};

export const awsS3ListCommand = ({ Delimiter }: { Delimiter?: string }) => {
  const { authData } = useAppStore.getState().userState;

  if (!authData) {
    return null;
  }

  return new ListObjectsV2Command({
    Bucket: authData.bucketName,
    Delimiter,
  });
};
