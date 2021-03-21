/** @jsxImportSource @emotion/react */
import { B005 } from "./colours";
import { Camels, RaceBetTypes, TileType } from "./types";
import { WebSocketProps, withWebSocket } from "./websocket";

const Game = (props: WebSocketProps) => {
  console.log("bing");
  // console.log(props.webSocket.sendMoveAction());
  console.log(JSON.stringify(props));
  //   console.log(props.sendMoveAction());
  return (
    <div
      css={{
        background: B005,
        borderRadius: "20px",
        flexGrow: 1,
      }}
    >
      {props.data}
      <button onClick={props.sendMoveAction}>Move</button>
      <button onClick={() => props.sendLegBetAction(Camels.Blue)}>
        Leg Bet
      </button>
      <button
        onClick={() =>
          props.sendRaceBetAction(Camels.Blue, RaceBetTypes.Winner)
        }
      >
        Race Bet
      </button>
      <button onClick={() => props.sendTileAction(10, TileType.Oasis)}>
        Place Tile
      </button>
    </div>
  );
};
const withHoc = withWebSocket(Game);
export default withHoc;
