import type { StateCreator } from "zustand";
import { AppStore, UserSlice } from "../types";

export const createUserSlice: StateCreator<AppStore, [], [], UserSlice> = (
  set
) => ({
  userState: {
    isLoggedIn: false,
    userDetails: null,
    token: "",
  },
  userActions: {
    getUser: (data) => {
      set((state) => ({
        ...state,
        userState: {
          ...state.userState,
          isLoggedIn: true,
          userDetails: data,
        },
      }));
    },
    login: (data) => {
      set((state) => ({
        ...state,
        userState: {
          ...state.userState,
          isLoggedIn: true,
          userDetails: data,
        },
      }));
    },
    logout: (status) => {
      if (status) {
        set((state) => ({
          ...state,
          userState: {
            ...state.userState,
            isLoggedIn: false,
            userDetails: null,
          },
        }));
      }
    },
  },
});
