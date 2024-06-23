import { useEffect } from "react";
import { useCommonAction } from "../../store/hooks";
import { useBucketFolders } from "./home-hooks";

export default function Home() {
  const { toggleLoader } = useCommonAction();

  // const { mutate: filesMutation } = useBucketFiles();
  const { mutate: foldersMutation } = useBucketFolders();

  useEffect(() => {
    toggleLoader(true);
    foldersMutation(undefined, {
      onSuccess(folders) {
        console.log("folders", folders);
      },
      onSettled() {
        toggleLoader(false);
      },
    });
  }, [foldersMutation, toggleLoader]);

  return <div>Home</div>;
}
