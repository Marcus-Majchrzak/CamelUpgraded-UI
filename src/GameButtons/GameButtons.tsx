/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { B005 } from "../colours";
import { Camels, RaceBetTypes, TileType } from "../types";
import ActionButton from "./ActionButton";
import { WebSocketProps } from "../websocket";
import LegBetButton from "./LegBetButton";

const ActionSpace = styled.div`
  position: absolute;
  background: ${B005};
  border-radius: 10px;
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-direction: row;
  padding: 0px 10px 0px 10px;
`;

const GameButtons = (props: WebSocketProps) => {
  return (
    <ActionSpace>
      <ActionButton onClick={props.sendMoveAction} text={"Move"} />
      <LegBetButton sendLegBetAction={props.sendLegBetAction} />
      <ActionButton
        onClick={() =>
          props.sendRaceBetAction(Camels.Blue, RaceBetTypes.Winner)
        }
        text={"Race Bet"}
      />
      <ActionButton
        onClick={() => props.sendTileAction(10, TileType.Oasis)}
        text={"Place Tile"}
      />
    </ActionSpace>
  );
};
export default GameButtons;
