// REACT & LIBRARIES
import { SetStateAction, useEffect, useState } from "react";

// SERVICES
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  results: SetStateAction<Game[]>;
  count: number;
  result: Game[];
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(res => {
        setGames(res.data.results);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};
