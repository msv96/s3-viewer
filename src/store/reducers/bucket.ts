import type { StateCreator } from "zustand";
import { AppStore, BucketSlice } from "../types";

type BucketSliceReturnType = StateCreator<AppStore, [], [], BucketSlice>;

export const createBucketSlice: BucketSliceReturnType = (set) => {
  return {
    bucketState: {
      breadcrumb: [],
      currentFolder: [],
      folders: [],
    },
    bucketActions: {
      setBreadcrumb(data) {
        set((state) => {
          return {
            ...state,
            bucketState: {
              ...state.bucketState,
              breadcrumb: data || [],
            },
          };
        });
      },
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
