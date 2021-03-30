import styled from "@emotion/styled";
import CashSymbol from "./CashSymbol";
import { camelToPrimaryColour, camelToSecondaryColour } from "./colours";
import { Camels } from "./types";

const OuterSpace = styled.div`
  background: ${(props) => props.color};
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
  display: flex;
  justifycontent: center;
  align-items: center;
`;
const InnerSpace = styled.div`
  background: ${(props) => props.color};
  padding: 12px 0px 12px 0px;
  border-radius: 5px;
`;

type BetCardProps = {
  value: number;
  camel: Camels;
};
const BetCard = (props: BetCardProps) => {
  console.log(props);
  return (
    <OuterSpace color={camelToPrimaryColour[props.camel]}>
      <InnerSpace color={camelToSecondaryColour[props.camel]}>
        <CashSymbol size={20} fontSize={30}>
          {props.value}
        </CashSymbol>
      </InnerSpace>
    </OuterSpace>
  );
};

export default BetCard;
