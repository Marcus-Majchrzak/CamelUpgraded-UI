/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import {
  B005,
  B032,
  B070,
  camelToPrimaryColour,
  camelToSecondaryColour,
} from "../colours";
import { Camels, strToCamel } from "../types";
import ActionButton from "./ActionButton";

const LegButtonWrapper = styled.div`
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

type LegButtonType = {
  isActive: boolean;
  isDisabled: boolean;
  onClick: () => void;
  onSubmit: (color: Camels) => void;
};
const LegBetButton = (props: LegButtonType) => {
  const actionButton = (
    <ActionButton
      onClick={props.onClick}
      text={"Leg Bet"}
      isActive={props.isActive}
      isDisabled={props.isDisabled}
    ></ActionButton>
  );
  return (
    <LegButtonWrapper>
      {props.isActive ? (
        <ColourPicker>
          <ColourPickerHeading>Choose a Camel</ColourPickerHeading>
          {Object.keys(Camels).map((color) => (
            <ColourButton
              onClick={() => props.onSubmit(strToCamel(color))}
              backgroundColour={camelToPrimaryColour[strToCamel(color)]}
              hoverColour={camelToSecondaryColour[strToCamel(color)]} // UPDATE TO BE INTENSIFIED COLOUR
            />
          ))}
          {actionButton}
        </ColourPicker>
      ) : (
        actionButton
      )}
    </LegButtonWrapper>
  );
};
export default LegBetButton;
