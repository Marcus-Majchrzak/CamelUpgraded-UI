/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import {
  B005,
  B015,
  B032,
  B070,
  camelToPrimaryColour,
  camelToSecondaryColour,
  S200,
  S300,
} from "../colours";
import { Camels, RaceBetTypes, strToCamel, strToRaceBetType } from "../types";
import ActionButton from "./ActionButton";

const RaceBetButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 160px;
`;

const ColourPicker = styled.div`
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
const ColourPickerHeading = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${B070};
`;

type ButtonType = {
  backgroundColour: string;
  hoverColour: string;
};
const ColourButton = styled.button<ButtonType>`
  height: 30px;
  border-radius: 5px;
  margin: 3px;
  background-color: ${(props) => props.backgroundColour};
  :hover {
    background-color: ${(props) => props.hoverColour};
  }
`;

type RaceBetButtonType = {
  isActive: boolean;
  onClick: () => void;
  onSubmit: (color: Camels, type: RaceBetTypes) => void;
  isDisabled: boolean;
};
const RaceBetButton = (props: RaceBetButtonType) => {
  const [hasSelected, setSelected] = useState(false);
  let storedColor = useRef("");
  const actionButton = (
    <ActionButton
      onClick={props.onClick}
      text={"Race Bet"}
      isActive={props.isActive}
      isDisabled={props.isDisabled}
    ></ActionButton>
  );

  const submitMove = (color: Camels, type: RaceBetTypes) => {
    setSelected(false);
    props.onSubmit(color, type);
  };
  return (
    <RaceBetButtonWrapper>
      {props.isActive ? (
        hasSelected ? (
          <ColourPicker>
            <ColourPickerHeading>Win or Lose?</ColourPickerHeading>
            {Object.keys(RaceBetTypes).map((type) => (
              <ColourButton
                onClick={() =>
                  submitMove(
                    strToCamel(storedColor.current),
                    strToRaceBetType(type)
                  )
                }
                backgroundColour={S200}
                hoverColour={S300}
              >
                {type}
              </ColourButton>
            ))}
            {actionButton}
          </ColourPicker>
        ) : (
          <ColourPicker>
            <ColourPickerHeading>Choose a Camel</ColourPickerHeading>
            {Object.keys(Camels).map((color) => (
              <ColourButton
                onClick={() => {
                  setSelected(true);
                  storedColor.current = color;
                }}
                backgroundColour={camelToPrimaryColour[strToCamel(color)]}
                hoverColour={camelToSecondaryColour[strToCamel(color)]} // UPDATE TO BE INTENSIFIED COLOUR
              />
            ))}
            {actionButton}
          </ColourPicker>
        )
      ) : (
        actionButton
      )}
    </RaceBetButtonWrapper>
  );
};
export default RaceBetButton;
