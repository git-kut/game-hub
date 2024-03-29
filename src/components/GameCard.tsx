import React from "react";
import { Game } from "../entities/Game";
import {
  AspectRatio,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Link to={"/games/" + game.slug}>
      <Card height="100%">
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={1}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
              // .map is an unfortunate must, due to how the parent_platfroms are structured in api
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
