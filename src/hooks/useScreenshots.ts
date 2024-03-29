import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";
import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
