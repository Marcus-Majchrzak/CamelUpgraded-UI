/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { camelToPrimaryColour, camelToSecondaryColour } from "./colours";
import { DiceRollType } from "./types";

const DiceTrackSpace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 10px;
  min-height 50px;
`;
const OuterSpace = styled.div`
  background: ${(props) => props.color};
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerSpace = styled.div`
  background: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
type DiceTrackType = {
  diceRolled: Array<DiceRollType>;
};
const DiceTrack = (props: DiceTrackType) => {
  console.log(">!!", props);
  return (
    <DiceTrackSpace>
      {props.diceRolled.map((die) => (
        <OuterSpace color={camelToPrimaryColour[die.color]}>
          <InnerSpace color={camelToSecondaryColour[die.color]}>
            {die.value}
          </InnerSpace>
        </OuterSpace>
      ))}
    </DiceTrackSpace>
  );
};
export default DiceTrack;
