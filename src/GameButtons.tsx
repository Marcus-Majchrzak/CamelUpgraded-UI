import React, { useEffect } from "react";
import { Camels, RaceBetTypes, TileType } from "./types";
import { WebSocketProps, withWebSocket } from "./websocket";

const GameButtons = (props: WebSocketProps) => {
  console.log("bing");
  // console.log(props.webSocket.sendMoveAction());
  console.log(JSON.stringify(props));
  //   console.log(props.sendMoveAction());
  return (
    <div>
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
const withHoc = withWebSocket(GameButtons);
export default withHoc;
