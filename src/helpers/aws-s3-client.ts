import {
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { useAppStore } from "../store";
import { TFolders } from "../types/global";

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

export const awsS3ListCommand = (
  options: Partial<ListObjectsV2CommandInput>
) => {
  const { authData } = useAppStore.getState().userState;

  if (!authData) {
    return null;
  }

  return new ListObjectsV2Command({
    Bucket: authData.bucketName,
    ...options,
  });
};

export const mapToFoldersAndFiles = ({
  CommonPrefixes = [],
  Contents = [],
}: {
  CommonPrefixes?: ListObjectsV2CommandOutput["CommonPrefixes"];
  Contents?: ListObjectsV2CommandOutput["Contents"];
}): TFolders[] => {
  if (CommonPrefixes.length >= 1) {
    return CommonPrefixes.map(({ Prefix }) => {
      return {
        name: Prefix || "",
        isFolder: true,
      };
    });
  }

  if (Contents.length >= 1) {
    return Contents.map(({ Key }) => {
      return {
        name: Key || "",
        isFolder: false,
      };
    });
  }

  return [];
};
