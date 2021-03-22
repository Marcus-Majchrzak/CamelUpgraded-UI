/** @jsxImportSource @emotion/react */
import { B005 } from "./colours";
import GameButtons from "./GameButtons";
import RaceTrack from "./RaceTrack";
import { WebSocketProps, withWebSocket } from "./websocket";
import PlayerAssets from "./PlayerAssets";
import styled from "@emotion/styled";

const GameArea = styled.div`
  position: relative;
  background: ${B005};
  border-radius: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Game = (props: WebSocketProps) => {
  console.log(">>>! ", props);
  const data = props.data;
  const camelPositions = props.data.boardState?.camelPositions;
  const me = props.data?.players[props.id];

  return (
    data && (
      <GameArea>
        {camelPositions ? (
          <RaceTrack camelPositions={camelPositions} />
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
