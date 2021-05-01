/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { B005 } from "../colours";
import { Camels, RaceBetTypes, TileEffectType, TileType } from "../types";
import ActionButton from "./ActionButton";
import { ActionFunctionsType } from "../websocket";
import LegBetButton from "./LegBetButton";
import PlaceTileButton from "./PlaceTileButton";
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

type GameButtonType = {
  actionFunctions: ActionFunctionsType;
  isDisabled: boolean;
  selectedTile: number;
  setSelectedTile: (tile: number) => void;
  setTileActivated: (isActive: boolean) => void;
};

const GameButtons = (props: GameButtonType) => {
  const {
    setTileActivated,
    actionFunctions,
    isDisabled,
    setSelectedTile,
    selectedTile,
  } = props;
  const [activeButton, setActiveButton] = useState(ActiveState.None);

  const onClick = (button: ActiveState) => {
    const newState = activeButton === button ? ActiveState.None : button;
    setActiveButton(newState);
  };
  const onMoveButtonSubmit = () => {
    actionFunctions.sendMoveAction();
    setActiveButton(ActiveState.None);
  };
  const onLegButtonSubmit = (color: Camels) => {
    actionFunctions.sendLegBetAction(color);
    setActiveButton(ActiveState.None);
  };
  const onRaceBetSubmit = (color: Camels, type: RaceBetTypes) => {
    actionFunctions.sendRaceBetAction(color, type);
    setActiveButton(ActiveState.None);
  };
  const onPlaceTileSubmit = (square: number, type: TileEffectType) => {
    actionFunctions.sendTileAction(square, type);
    setSelectedTile(-1);
    setTileActivated(false);
    setActiveButton(ActiveState.None);
  };

  return (
    <ActionSpace>
      <ActionButton
        onClick={onMoveButtonSubmit}
        text={"Move"}
        isDisabled={isDisabled}
      />
      <LegBetButton
        isActive={activeButton === ActiveState.LegButton}
        isDisabled={isDisabled}
        onSubmit={onLegButtonSubmit}
        onClick={() => onClick(ActiveState.LegButton)}
      />
      <RaceBetButton
        isActive={activeButton === ActiveState.RaceBet}
        isDisabled={isDisabled}
        onSubmit={onRaceBetSubmit}
        onClick={() => onClick(ActiveState.RaceBet)}
      />
      <PlaceTileButton
        isActive={activeButton === ActiveState.PlaceTile}
        onSubmit={onPlaceTileSubmit}
        onClick={() => onClick(ActiveState.PlaceTile)}
        isDisabled={isDisabled}
        selectedTile={selectedTile}
        setTileActivated={setTileActivated}
      />
    </ActionSpace>
  );
};
export default GameButtons;
