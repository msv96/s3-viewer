import type { StateCreator } from "zustand";
import { AppStore, CommonSlice } from "../types";

type CommonSliceReturnType = StateCreator<AppStore, [], [], CommonSlice>;

export const createCommonSlice: CommonSliceReturnType = (set) => {
  return {
    commonState: {
      loader: false,
    },
    commonActions: {
      toggleLoader(data) {
        set((state) => {
          return {
            ...state,
            commonState: {
              ...state.commonState,
              loader: data ?? !state.commonState.loader,
            },
          };
        });
      },
    },
  };
};
