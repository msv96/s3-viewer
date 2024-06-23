import type { StateCreator } from "zustand";
import { AppStore, CommonSlice } from "../types";

type CommonSliceReturnType = StateCreator<AppStore, [], [], CommonSlice>;

export const createCommonSlice: CommonSliceReturnType = (set) => {
  return {
    commonState: {
      loader: false,
    },
    commonActions: {
      toggleLoader(value) {
        set((state) => {
          return {
            ...state,
            commonState: {
              ...state.commonState,
              loader: value ?? !state.commonState.loader,
            },
          };
        });
      },
    },
  };
};
