import { Grid } from "@mantine/core";
import { useEffect } from "react";
import FileCard from "../../common/FileCard";
import FolderCard from "../../common/FolderCard";
import { useBucketState, useCommonAction } from "../../store/hooks";
import { useFetchBucket } from "./home-hooks";

export default function Home() {
  const { currentFolder } = useBucketState();
  const { toggleLoader } = useCommonAction();

  const { status: filesStatus, mutate: filesMutate } = useFetchBucket();
  const { status: foldersStatus, mutate: foldersMutate } = useFetchBucket();

  const isPending = filesStatus === "pending" || foldersStatus === "pending";
  const isSuccess = filesStatus === "success" && foldersStatus === "success";

  useEffect(() => {
    if (isPending) {
      toggleLoader(true);
    } else if (isSuccess) {
      toggleLoader(false);
    }
  }, [isPending, isSuccess, toggleLoader]);

  useEffect(() => {
    filesMutate(
      { MaxKeys: 24 },
      {
        onSuccess(data) {
          console.log("files success", data);
        },
      }
    );
    foldersMutate(
      { MaxKeys: 24, Delimiter: "/" },
      {
        onSuccess(data) {
          console.log("folders success", data);
        },
      }
    );
  }, [filesMutate, foldersMutate]);

  return (
    <Grid>
      {currentFolder.map(({ isFolder, name }) => {
        if (isFolder) {
          return <FolderCard key={name} folderName={name} />;
        }
        return <FileCard key={name} fileName={name} />;
      })}
    </Grid>
  );
}
