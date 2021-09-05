/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Camels, DiceRollType } from "./../types";
import Die from "./Die";

const DiceTrackSpace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 10px;
  min-height 50px;
`;
type DiceTrackType = {
  diceRolled: Array<DiceRollType>;
};
const DiceTrack = (props: DiceTrackType) => {
  const getOtherRolledCamels = (excludedCamel: Camels) => {
    return props.diceRolled
      .map((dice) => dice.camel)
      .filter((camel) => camel !== excludedCamel);
  };

  return (
    <DiceTrackSpace>
      {props.diceRolled.map((die) => (
        <Die diceRoll={die} rolledCamels={getOtherRolledCamels(die.camel)} />
      ))}
    </DiceTrackSpace>
  );
};
export default DiceTrack;
