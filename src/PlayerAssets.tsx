/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {
  B005,
  B070,
  camelToPrimaryColour,
  camelToSecondaryColour,
} from "./colours";
import { PlayerType } from "./types";
import CashSymbol from "./CashSymbol";
import LegBetCard from "./LegBetCard";

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

const PlayerAssets = (props: PlayerType) => {
  console.log(">>>", !!props.legBets);
  return (
    <ActionSpace>
      <BetSpace>
        {!!props.legBets.length ? (
          props.legBets.map((bet) => (
            <LegBetCard value={bet.value} camel={bet.camel} />
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
