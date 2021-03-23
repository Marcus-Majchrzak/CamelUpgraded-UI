/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { B032, S200 } from "./colours";
import { PlayerType } from "./types";

const PlayerBarSpace = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  display: flex;
  flex-direction: row;
`;
const PlayerCard = styled.div`
  width: 90px;
  height: 20px;
  margin-right: 5px;
  background: ${S200};
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
type PlayerBarType = {
  players: Record<string, PlayerType>;
};
const PlayerBar = (props: PlayerBarType) => {
  return (
    <PlayerBarSpace>
      {Object.entries(props.players).map((player) => (
        <PlayerSpace>
          <PlayerCard />
          <div>{player[1].name}</div>
        </PlayerSpace>
      ))}
    </PlayerBarSpace>
  );
};
export default PlayerBar;
