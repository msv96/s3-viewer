export type TUserData = {
  name: string;
};

export type TLoginFormValues = {
  accessId: string;
  secretKey: string;
  bucketName: string;
  region: string;
};

export type TFolders = {
  name: string;
  isFolder: boolean;
  children?: TFolders[];
};
