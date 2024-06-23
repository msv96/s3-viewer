import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../helpers/axios-client";

export const useFetchRegions = () => {
  return useQuery({
    queryKey: ["regions"],
    queryFn: async () => {
      const { data } = await axiosClient.get<{ regions: string[] }>(
        "/json/regions.json",
        {
          baseURL: window.location.origin,
        }
      );
      return data.regions;
    },
  });
};
