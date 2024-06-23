import { useAppStore } from "./";

// state
export const useBucketState = () => useAppStore((state) => state.bucketState);
export const useCommonState = () => useAppStore((state) => state.commonState);
export const useUserState = () => useAppStore((state) => state.userState);

// action
export const useBucketAction = () =>
  useAppStore((state) => state.bucketActions);
export const useCommonAction = () =>
  useAppStore((state) => state.commonActions);
export const useUserAction = () => useAppStore((state) => state.userActions);
