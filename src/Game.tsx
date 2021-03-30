/** @jsxImportSource @emotion/react */
import { B005 } from "./colours";
import GameButtons from "./GameButtons/GameButtons";
import RaceTrack from "./RaceTrack";
import DiceTrack from "./DiceTrack";
import PlayerBar from "./PlayerBar";
import { WebSocketProps, withWebSocket } from "./websocket";
import PlayerAssets from "./PlayerAssets";
import styled from "@emotion/styled";
import LegBids from "./LegBids";

const GameArea = styled.div`
  position: relative;
  background: ${B005};
  border-radius: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TrackArea = styled.div`
  position: fixed;
  width: 840px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -420px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LegBetArea = styled.div`
  top: 50%;
`;

const Game = (props: WebSocketProps) => {
  console.log(">>>! ", props);
  const data = props.data;
  const camelPositions = props.data.boardState?.camelPositions;
  const diceRolled = props.data.boardState?.diceRolled;
  const players = props.data.players;
  const legBids = props.data.boardState.legBids;
  const me = props.data?.players[props.id];

  return (
    data && (
      <GameArea>
        <PlayerBar players={players} />
        {camelPositions ? (
          <>
            <LegBetArea>
              <LegBids legBids={legBids} />
            </LegBetArea>
            <TrackArea>
              <RaceTrack camelPositions={camelPositions} />
              <DiceTrack diceRolled={diceRolled} />
            </TrackArea>
          </>
        ) : (
          "loading"
        )}
        <GameButtons {...props} />
        <PlayerAssets {...me} />
      </GameArea>
    )
  );
};

const withHoc = withWebSocket(Game);
export default withHoc;
