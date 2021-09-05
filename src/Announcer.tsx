import styled from "@emotion/styled";
import { B070 } from "./colours";
import { PlayerType } from "./types";

const AnnouncerWrapper = styled.div`
  color: ${B070};
  font-size: 40px;
  margin-bottom: 75px;
`;

type AnnouncerType = {
  players: Array<PlayerType>;
  playerTurn: number;
  isMyTurn: Boolean;
};

const Announcer = (props: AnnouncerType) => {
  const { players, playerTurn, isMyTurn } = props;
  const AnnouncementString = (): String => {
    const playerName = players[playerTurn]?.name;
    if (!playerName) {
      return "Game Over!";
    } else if (isMyTurn) {
      return `It's Your Turn, ${playerName}`;
    }
    return `${playerName} is making a move`;
  };
  return <AnnouncerWrapper>{AnnouncementString()}</AnnouncerWrapper>;
};

export default Announcer;
