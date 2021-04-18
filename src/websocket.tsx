import React, { useState, useCallback, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Camels, RaceBetTypes, RequestDataType, TileType } from "./types";

export type ActionFunctionsType = {
  sendMoveAction: () => void;
  sendLegBetAction: (camel: Camels) => void;
  sendRaceBetAction: (camel: Camels, betType: RaceBetTypes) => void;
  sendTileAction: (square: number, tileType: TileType) => void;
};

export interface WebSocketProps {
  id: string;
  data: RequestDataType;
  actionFunctions: ActionFunctionsType;
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

    const response = JSON.parse(lastMessage ? lastMessage.data : "{}");
    const webSocket = {
      id: id.current,
      data: response.data,
      actionFunctions: {
        sendMoveAction,
        sendLegBetAction,
        sendRaceBetAction,
        sendTileAction,
      },
    };

    const gameStarted = (): Boolean => {
      return id.current !== "NOT-SET";
    };

    if (response) {
      switch (response.action) {
        case "init":
          console.log(response?.id);
          id.current = response?.id;
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
    console.log(">>>", response);
    webSocket.id = id.current;
    return readyState === ReadyState.OPEN && gameStarted() ? (
      <WrappedComponent {...(props as P)} {...webSocket} />
    ) : (
      <>loading</>
    );
  };
};
