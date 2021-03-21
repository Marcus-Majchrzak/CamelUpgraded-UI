/** @jsxImportSource @emotion/react */
import { B005 } from "./colours";
import GameButtons from "./GameButtons";
import RaceTrack from "./RaceTrack";
import { WebSocketProps, withWebSocket } from "./websocket";

const Game = (props: WebSocketProps) => {
  const camelPositions = props.data?.boardState?.camelPositions;
  console.log(">>>! ", props);
  return (
    <div
      css={{
        position: "relative",
        background: B005,
        borderRadius: "20px",
        flexGrow: 1,
      }}
    >
      {camelPositions ? (
        <RaceTrack camelPositions={camelPositions} />
      ) : (
        "loading"
      )}
      <GameButtons {...props} />
    </div>
  );
};
const withHoc = withWebSocket(Game);
export default withHoc;
