import { useAppStore } from "./";

// state
export const useUserState = () => useAppStore((state) => state.userState);

// action
export const useUserAction = () => useAppStore((state) => state.userActions);
