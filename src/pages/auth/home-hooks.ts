import { ListObjectsV2CommandInput } from "@aws-sdk/client-s3";
import { useMutation } from "@tanstack/react-query";
import {
  awsS3Client,
  awsS3ListCommand,
  mapToFoldersAndFiles,
} from "../../helpers/aws-s3-client";
import { TFolders } from "../../types/global";

export const useFetchBucket = (
  args: Partial<ListObjectsV2CommandInput> = {}
) => {
  return useMutation<
    TFolders[],
    Error,
    Partial<ListObjectsV2CommandInput> | undefined,
    unknown
  >({
    mutationKey: [
      "fetch-bucket",
      Object.entries(args)
        .map(([key, value]) => key + value)
        .join(","),
    ],
    mutationFn: async (
      options: Partial<ListObjectsV2CommandInput> = {
        Delimiter: "/",
        Prefix: "",
        MaxKeys: 1000,
      }
    ) => {
      const params = { ...args, ...options };

      const client = awsS3Client();
      const command = awsS3ListCommand(params);
      let result: TFolders[] = [];

      if (!client || !command) {
        return result;
      }

      const { CommonPrefixes, Contents } = await client.send(command);

      if (CommonPrefixes && CommonPrefixes.length >= 1) {
        const foldersData = CommonPrefixes.filter(({ Prefix }) => !!Prefix);

        result = [
          ...result,
          ...mapToFoldersAndFiles({ CommonPrefixes: foldersData }),
        ];
      }

      if (Contents && Contents.length >= 1) {
        const filesData = Contents.filter(({ Key }) => {
          return Key && !Key.endsWith("/");
        });

        result = [...result, ...mapToFoldersAndFiles({ Contents: filesData })];
      }

      return result;
    },
  });
};
