/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {
  B005,
  B070,
  camelToPrimaryColour,
  camelToSecondaryColour,
} from "./colours";
import { Camels, PlayerType, strToCamel } from "./types";
import LegBetCard from "./LegBetCard";

const LegBetSpace = styled.div`
  position: absolute;
  left: -160px;
  top: -67px;
  display: flex;
  flexdirection: row;
  padding: 10px;
  border-radius: 10px;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
`;
type LegBidProps = {
  legBids: Record<Camels, Array<number>>;
};

const LegBids = (props: LegBidProps) => {
  return (
    <LegBetSpace>
      {Object.keys(props.legBids).map((key) => {
        const camel = strToCamel(key);
        const value = props.legBids[camel].slice(-1)[0];
        console.log(props);
        return <LegBetCard value={value || 0} camel={camel} />;
      })}
    </LegBetSpace>
  );
};
export default LegBids;
