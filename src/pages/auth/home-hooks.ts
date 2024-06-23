import { useMutation } from "@tanstack/react-query";
import { awsS3Client, awsS3ListCommand } from "../../helpers/aws-s3-client";

export const useBucketFolders = () => {
  return useMutation({
    mutationKey: ["bucket-folders"],
    mutationFn: async () => {
      const client = awsS3Client();
      const command = awsS3ListCommand({ Delimiter: "/" });

      if (!client || !command) {
        return [];
      }

      const { CommonPrefixes } = await client.send(command);

      return CommonPrefixes || [];
    },
  });
};

export const useBucketFiles = () => {
  return useMutation({
    mutationKey: ["bucket-files"],
    mutationFn: async () => {
      const client = awsS3Client();
      const command = awsS3ListCommand({});

      if (!client || !command) {
        return [];
      }

      const { Contents } = await client.send(command);

      return Contents || [];
    },
  });
};
