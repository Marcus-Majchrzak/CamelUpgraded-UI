/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { B005 } from "../colours";
import { Camels, RaceBetTypes, TileType } from "../types";
import ActionButton from "./ActionButton";
import { WebSocketProps } from "../websocket";
import LegBetButton from "./LegBetButton";
import RaceBetButton from "./RaceBetButton";
import { useState } from "react";

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

enum ActiveState {
  MoveButton,
  LegButton,
  RaceBet,
  PlaceTile,
  None,
}

const GameButtons = (props: WebSocketProps) => {
  const [activeButton, setActiveButton] = useState(ActiveState.None);
  const onClick = (button: ActiveState) => {
    const newState = activeButton === button ? ActiveState.None : button;
    setActiveButton(newState);
  };
  const onMoveButtonSubmit = () => {
    props.sendMoveAction();
    setActiveButton(ActiveState.None);
  };
  const onLegButtonSubmit = (color: Camels) => {
    props.sendLegBetAction(color);
    setActiveButton(ActiveState.None);
  };
  const onRaceBetSubmit = (color: Camels, type: RaceBetTypes) => {
    props.sendRaceBetAction(color, type);
    setActiveButton(ActiveState.None);
  };
  const onPlaceTileSubmit = (tile: number, type: TileType) => {
    props.sendTileAction(tile, type);
    setActiveButton(ActiveState.None);
  };

  return (
    <ActionSpace>
      <ActionButton onClick={onMoveButtonSubmit} text={"Move"} />
      <LegBetButton
        isActive={activeButton === ActiveState.LegButton}
        onSubmit={onLegButtonSubmit}
        onClick={() => onClick(ActiveState.LegButton)}
      />
      <RaceBetButton
        isActive={activeButton === ActiveState.RaceBet}
        onSubmit={onRaceBetSubmit}
        onClick={() => onClick(ActiveState.RaceBet)}
      />
      <ActionButton
        onClick={() => props.sendTileAction(10, TileType.Oasis)}
        text={"Place Tile"}
      />
    </ActionSpace>
  );
};
export default GameButtons;
