import { Grid, GridCol } from "@mantine/core";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FileCard from "../../common/FileCard";
import FolderCard from "../../common/FolderCard";
import {
  useBucketAction,
  useBucketState,
  useCommonAction,
} from "../../store/hooks";
import { useFetchBucket } from "./home-hooks";

export default function Home() {
  const [searchParams] = useSearchParams({ Prefix: "" });
  const Prefix = searchParams.get("Prefix") || "";

  const { currentFolder } = useBucketState();
  const { setCurrentFolder, setFolders } = useBucketAction();
  const { toggleLoader } = useCommonAction();

  const { isPending, isSuccess, mutate: filesMutate } = useFetchBucket();

  const handleBucketFetch = useCallback(() => {
    return filesMutate(
      { Delimiter: "/", Prefix, MaxKeys: 24 },
      {
        onSuccess(response) {
          const data = response.map((item) => {
            return {
              ...item,
              displayName: item.name.replace(Prefix, ""),
            };
          });
          setCurrentFolder(data);
          setFolders(data);
        },
      }
    );
  }, [Prefix, filesMutate, setCurrentFolder, setFolders]);

  useEffect(() => {
    if (isPending) {
      toggleLoader(true);
    } else if (isSuccess) {
      toggleLoader(false);
    }
  }, [isPending, isSuccess, toggleLoader]);

  useEffect(() => {
    handleBucketFetch();
  }, [handleBucketFetch]);

  return (
    <Grid>
      {currentFolder.map(({ displayName, isFolder, name }) => {
        return (
          <GridCol key={name} span={1}>
            {isFolder ? (
              <FolderCard displayName={displayName} folderName={name} />
            ) : (
              <FileCard displayName={displayName} fileName={name} />
            )}
          </GridCol>
        );
      })}
    </Grid>
  );
}
