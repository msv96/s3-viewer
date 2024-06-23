import type { StateCreator } from "zustand";
import { AppStore, UserSlice } from "../types";

type UserSliceReturnType = StateCreator<AppStore, [], [], UserSlice>;

export const createUserSlice: UserSliceReturnType = (set) => {
  return {
    userState: {
      isLoggedIn: false,
      authData: null,
    },
    userActions: {
      login(data) {
        set((state) => {
          return {
            ...state,
            userState: {
              ...state.userState,
              isLoggedIn: true,
              authData: data,
            },
          };
        });
      },
      logout() {
        set((state) => {
          return {
            ...state,
            userState: {
              ...state.userState,
              isLoggedIn: false,
              authData: null,
            },
          };
        });
      },
    },
  };
};
