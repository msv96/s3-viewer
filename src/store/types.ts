import { TFolders, TLoginFormValues } from "../types/global";

export type AppStore = BucketSlice & CommonSlice & UserSlice;

export type BucketSlice = {
  bucketState: {
    breadcrumb: string[];
    currentFolder: TFolders[];
    folders: TFolders[];
  };
  bucketActions: {
    setBreadcrumb(data: string[]): void;
    setCurrentFolder(data: TFolders[]): void;
    setFolders(data: TFolders[]): void;
  };
};

export type CommonSlice = {
  commonState: {
    loader: boolean;
  };
  commonActions: {
    toggleLoader(data?: boolean): void;
  };
};

export type UserSlice = {
  userState: {
    isLoggedIn: boolean;
    authData: TLoginFormValues | null;
  };
  userActions: {
    login(data: TLoginFormValues): void;
    logout(): void;
  };
};
