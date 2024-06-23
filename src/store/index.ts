import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  createBucketSlice,
  createCommonSlice,
  createUserSlice,
} from "./reducers";
import { AppStore } from "./types";

export const useAppStore = create<AppStore, [["zustand/devtools", never]]>(
  devtools(
    (...a) => ({
      ...createBucketSlice(...a),
      ...createCommonSlice(...a),
      ...createUserSlice(...a),
    }),
    {
      enabled: import.meta.env.DEV,
    }
  )
);
