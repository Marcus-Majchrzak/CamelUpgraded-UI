import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { P200, P300, P400, P500 } from "../colours";

type StyledButtonType = {
  isActive: boolean;
};
const StyledButton = styled.button<StyledButtonType>`
  width: 150px;
  height: 70px;
  background: ${(props) => (props.isActive ? P400 : P200)};
  border-radius: 5px;
  margin: ${(props) => (props.isActive ? "5px;" : "10px 5px 10px 5px")};
  font-size: 20px;
  :hover {
    background-color: ${(props) => (props.isActive ? P500 : P300)};
  }
`;

type ActionButtonType = {
  onClick: () => void;
  text: String;
  isActive?: boolean;
};
const ActionButton = (props: ActionButtonType): ReactElement => {
  return (
    <StyledButton onClick={props.onClick} isActive={props.isActive || false}>
      {props.text}
    </StyledButton>
  );
};
export default ActionButton;
