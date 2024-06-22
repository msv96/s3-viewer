import { TUserData } from "../types/global";

export type AppStore = UserSlice;

export type UserSlice = {
  userState: {
    isLoggedIn: boolean;
    userDetails: TUserData | null;
    token: string;
  };
  userActions: {
    getUser(data: TUserData): void;
    login(data: TUserData): void;
    logout(status: boolean): void;
  };
};
