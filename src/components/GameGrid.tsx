// REACT & LIBRARIES
import { SetStateAction, useEffect, useState } from "react";

// STYLES
import { Text } from "@chakra-ui/react";

// SERVICES
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  results: SetStateAction<Game[]>;
  count: number;
  result: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then(res => {
        setGames(res.data.results);
      })
      .catch(err => setError(err));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
