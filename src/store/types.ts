import { TLoginFormValues } from "../types/global";

export type AppStore = CommonSlice & UserSlice;

export type CommonSlice = {
  commonState: {
    loader: boolean;
  };
  commonActions: {
    toggleLoader(value?: boolean): void;
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
