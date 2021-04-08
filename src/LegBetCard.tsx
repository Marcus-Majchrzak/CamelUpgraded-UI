import styled from "@emotion/styled";
import CashSymbol from "./CashSymbol";
import { camelToPrimaryColour, camelToSecondaryColour, TRANS } from "./colours";
import { Camels } from "./types";

type CardStyleProps = {
  isPlaceholder: boolean;
};
const OuterSpace = styled.div<CardStyleProps>`
  background: ${(props) => (props.isPlaceholder ? TRANS : props.color)};
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
  display: flex;
  justifycontent: center;
  align-items: center;
  border: 2px dashed ${(props) => (props.isPlaceholder ? props.color : TRANS)};
`;
const InnerSpace = styled.div<CardStyleProps>`
  background: ${(props) => props.color};
  visibility: ${(props) => (props.isPlaceholder ? "hidden" : "visible")};
  padding: 12px 0px 12px 0px;
  border-radius: 5px;
`;

type BetCardProps = {
  value: number;
  camel: Camels;
};
const BetCard = (props: BetCardProps) => {
  const pc = camelToPrimaryColour[props.camel];
  const sc = camelToSecondaryColour[props.camel];
  const isPlaceholder = props.value === 0;
  return (
    <OuterSpace color={pc} isPlaceholder={isPlaceholder}>
      <InnerSpace color={sc} isPlaceholder={isPlaceholder}>
        <CashSymbol size={20} fontSize={30}>
          {props.value}
        </CashSymbol>
      </InnerSpace>
    </OuterSpace>
  );
};

export default BetCard;
