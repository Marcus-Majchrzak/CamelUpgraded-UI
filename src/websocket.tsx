import React, { useState, useCallback, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Camels, RaceBetTypes, RequestDataType, TileType } from "./types";

export interface WebSocketProps {
  data: RequestDataType;
  sendMoveAction: () => void;
  sendLegBetAction: (camel: Camels) => void;
  sendRaceBetAction: (camel: Camels, betType: RaceBetTypes) => void;
  sendTileAction: (square: Number, tileType: TileType) => void;
}

export const withWebSocket = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, keyof WebSocketProps>> => {
  return function Websocket(props) {
    const [socketUrl, setSocketUrl] = useState(
      "ws://localhost:8080/ws/camelupgraded"
    ); //TODO: Make dynamic url
    const id = useRef("NOT-SET");

    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
      socketUrl
    );

    const handleClickSendMessage = useCallback(
      () => sendJsonMessage("Hello"),
      []
    );

    const sendMoveAction = () => {
      sendJsonMessage({
        id: id.current,
        action: "move",
      });
    };
    const sendLegBetAction = (camel: Camels) => {
      sendJsonMessage({
        id: id.current,
        action: "leg-bet",
        camel,
      });
    };
    const sendRaceBetAction = (camel: Camels, betType: RaceBetTypes) => {
      sendJsonMessage({
        id: id.current,
        action: "race-bet",
        camel,
        betType,
      });
    };
    const sendTileAction = (space: Number, tileType: TileType) => {
      sendJsonMessage({
        id: id.current,
        action: "place-tile",
        space,
        tileType,
      });
    };

    const data = JSON.parse(lastMessage ? lastMessage.data : "{}");
    const webSocket = {
      data,
      sendMoveAction,
      sendLegBetAction,
      sendRaceBetAction,
      sendTileAction,
    };
    if (data) {
      switch (data.action) {
        case "init":
          console.log(data?.data?.id);
          id.current = data?.data?.id;
          break;
        case "ready":
          console.log("My Turn!");
          break;
        case "update":
          console.log("Update Page");
          break;
        case "Error":
          console.log("UH OH");
          break;
        default:
          console.log("Couldn't identify action");
      }
    }
    console.log(">>>", data);
    return readyState === ReadyState.OPEN ? (
      <WrappedComponent {...(props as P)} {...webSocket} />
    ) : (
      <>loading</>
    );
  };
};
