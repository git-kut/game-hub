import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardBox from "./GameCardBox";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardBox>
              <GameCardSkeleton key={skeleton} />
            </GameCardBox>
          ))}
        {games.map((game) => (
          <GameCardBox>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardBox>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
