import type { StateCreator } from "zustand";
import { AppStore, BucketSlice } from "../types";

type BucketSliceReturnType = StateCreator<AppStore, [], [], BucketSlice>;

export const createBucketSlice: BucketSliceReturnType = (set) => {
  return {
    bucketState: {
      currentFolder: [],
      folders: [],
    },
    bucketActions: {
      setCurrentFolder(data) {
        set((state) => {
          return {
            ...state,
            bucketState: {
              ...state.bucketState,
              currentFolder: data || [],
            },
          };
        });
      },
      setFolders(data) {
        set((state) => {
          return {
            ...state,
            bucketState: {
              ...state.bucketState,
              folders: data || [],
            },
          };
        });
      },
    },
  };
};
