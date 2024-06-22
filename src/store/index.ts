import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createUserSlice } from "./reducers/user";
import { AppStore } from "./types";

export const useAppStore = create<AppStore, [["zustand/devtools", never]]>(
  devtools(
    (...a) => ({
      ...createUserSlice(...a),
    }),
    {
      enabled: import.meta.env.DEV,
    }
  )
);
