/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { B032, S200, S300 } from "./colours";
import { PlayerType } from "./types";

const PlayerBarSpace = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  display: flex;
  flex-direction: row;
`;
const PlayerCard = styled.div<PlayerCardType>`
  width: 90px;
  height: 20px;
  margin-right: 5px;
  background: ${(props) => (props.isActive ? S300 : S200)};
  border-radius: 0px 0px 10px 10px;
`;
const PlayerSpace = styled.div`
  margin-right: 10px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${B032};
`;
type PlayerCardType = {
  isActive: Boolean;
};
type PlayerBarType = {
  players: Array<PlayerType>;
  playerTurn: number;
};
const PlayerBar = (props: PlayerBarType) => {
  const { playerTurn, players } = props;
  return (
    <PlayerBarSpace>
      {Object.entries(players).map((player, i) => (
        <PlayerSpace>
          <PlayerCard isActive={playerTurn === i} />
          <div>{player[1].name}</div>
        </PlayerSpace>
      ))}
    </PlayerBarSpace>
  );
};
export default PlayerBar;
