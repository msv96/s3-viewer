import { useSessionStorage } from "@mantine/hooks";
import { SessionStorageKey } from "../helpers/constants";
import { TLoginFormValues } from "../types/global";

export const useS3Auth = () => {
  return useSessionStorage<Partial<TLoginFormValues>>({
    key: SessionStorageKey,
    defaultValue: {
      bucketName: "",
      region: "",
    },
    getInitialValueInEffect: true,
  });
};
