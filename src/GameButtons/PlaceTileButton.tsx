/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { B070, S200, S300 } from "../colours";
import { strToTileEffectType, TileEffectType, TileType } from "../types";
import ActionButton from "./ActionButton";

const LegButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 160px;
`;

const TilePicker = styled.div`
  display: flex;
  border-radius: 5px;
  position: absolute;
  bottom: 5px;
  background-color: #404040;
  width: 160px;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
`;
const TilePickerHeading = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${B070};
`;
const SpacePickerHeading = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${B070};
  padding: 5px;
  margin-bottom: 10px;
`;
const ColourButton = styled.button<ButtonType>`
  height: 30px;
  border-radius: 5px;
  margin: 3px;
  background-color: ${(props) => props.backgroundColour};
  :hover {
    background-color: ${(props) => props.hoverColour};
  }
`;

type ButtonType = {
  backgroundColour: string;
  hoverColour: string;
};
type LegButtonType = {
  isActive: boolean;
  isDisabled: boolean;
  selectedTile: number;
  onClick: () => void;
  onSubmit: (square: number, tileType: TileEffectType) => void;
  setTileActivated: (isActive: boolean) => void;
};
const PlaceTileButton = (props: LegButtonType) => {
  const [hasSelected, setSelected] = useState(false);
  let storedType = useRef("");
  const actionButton = (
    <ActionButton
      onClick={props.onClick}
      text={"Place Tile"}
      isActive={props.isActive}
      isDisabled={props.isDisabled}
    ></ActionButton>
  );
  const onSelect = (tile: string) => {
    storedType.current = tile;
    props.setTileActivated(true);
    setSelected(true);
  };

  if (!props.isActive && hasSelected) {
    setSelected(false);
  }
  if (props.selectedTile != -1) {
    props.onSubmit(props.selectedTile, strToTileEffectType(storedType.current));
  }

  return (
    <LegButtonWrapper>
      {props.isActive ? (
        hasSelected ? (
          <TilePicker>
            <SpacePickerHeading>Select a space on the board</SpacePickerHeading>
            {actionButton}
          </TilePicker>
        ) : (
          <TilePicker>
            <TilePickerHeading>Tile Type?</TilePickerHeading>
            {Object.keys(TileEffectType).map((type) => (
              <ColourButton
                onClick={() => onSelect(type)}
                backgroundColour={S200}
                hoverColour={S300}
              >
                {type}
              </ColourButton>
            ))}
            {actionButton}
          </TilePicker>
        )
      ) : (
        actionButton
      )}
    </LegButtonWrapper>
  );
};
export default PlaceTileButton;
