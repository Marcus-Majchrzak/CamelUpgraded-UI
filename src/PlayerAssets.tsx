/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {
  B005,
  B070,
  camelToPrimaryColour,
  camelToSecondaryColour,
  MCASH,
} from "./colours";
import { PlayerType } from "./types";

const ActionSpace = styled.div`
  position: absolute;
  background: ${B005};
  bottom: 10px;
  right: 10px;
  display: flex;
  flexdirection: row;
  padding: 10px;
  border-radius: 10px;
`;
const CashSpace = styled.div`
  background: ${B005};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
type CashSymbolProps = {
  size: number;
  fontSize: number;
};
const CashSymbol = styled.div<CashSymbolProps>`
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: ${MCASH};
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize}px;
`;

const BetSpace = styled.div`
  background: ${B005};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-right: 10px;
  height: 100px;
  display: flex;
  justifycontent: center;
  align-items: center;
`;

const NoBetSpace = styled.div`
  color: ${B070};
  font-size: 24px;
  height: 80px;
  display: flex;
  justifycontent: center;
  align-items: center;
`;

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
  primaryColor: string;
  secondaryColor: string;
};
const BetCard = (props: BetCardProps) => {
  console.log(props);
  return (
    <OuterSpace color={props.primaryColor}>
      <InnerSpace color={props.secondaryColor}>
        <CashSymbol size={20} fontSize={30}>
          {props.value}
        </CashSymbol>
      </InnerSpace>
    </OuterSpace>
  );
};

const PlayerAssets = (props: PlayerType) => {
  console.log(">>>", !!props.legBets);
  return (
    <ActionSpace>
      <BetSpace>
        {!!props.legBets.length ? (
          props.legBets.map((bet) => (
            <BetCard
              value={bet.value}
              primaryColor={camelToPrimaryColour[bet.camel]}
              secondaryColor={camelToSecondaryColour[bet.camel]}
            />
          ))
        ) : (
          <NoBetSpace>No Bets</NoBetSpace>
        )}
      </BetSpace>
      <CashSpace>
        <CashSymbol size={55} fontSize={48}>
          {props.money}
        </CashSymbol>
      </CashSpace>
    </ActionSpace>
  );
};
export default PlayerAssets;
