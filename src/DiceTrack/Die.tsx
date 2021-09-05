/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { camelToPrimaryColour, camelToSecondaryColour } from "../colours";
import { Camels, DiceRollType, strToCamel } from "../types";
import { useRef, useState } from "react";
import { useInterval } from "../helper-functions";

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
  diceRoll: DiceRollType;
  rolledCamels: Array<Camels>;
};

const Dice = (props: DiceTrackType) => {
  const { diceRoll, rolledCamels } = props;
  const TOTAL_TICKS = 25;

  const randDiceValue = () => Math.floor(Math.random() * 3 + 1);
  const randColorValue = (currentCamel?: Camels) => {
    const filteredCamels = Object.keys(Camels).filter(
      (camel) =>
        camel !== currentCamel && !rolledCamels.includes(strToCamel(camel))
    );
    console.log(currentCamel, filteredCamels);
    const randomKey = Math.floor(Math.random() * filteredCamels.length);

    return strToCamel(filteredCamels[randomKey]);
  };
  const determineDiceColor = () => {
    const numCamelsLeft = Object.keys(Camels).length - rolledCamels.length;
    console.log(">>!", rolledCamels.length, Object.keys(Camels).length);
    if (ticks >= TOTAL_TICKS - 10 || numCamelsLeft === 1) {
      return diceRoll.camel;
    }
    return randColorValue(diceColor.current);
  };

  const determineDiceValue = () => {
    console.log(ticks);
    if (ticks >= TOTAL_TICKS) {
      return diceRoll.move;
    }
    const randValue = randDiceValue();
    return randValue === diceValue.current ? (randValue % 3) + 1 : randValue;
  };

  const [ticks, setTicks] = useState(0);

  const delay = ticks <= TOTAL_TICKS ? (ticks * ticks) / 2 + 100 : null;
  useInterval(() => {
    setTicks(ticks + 1);
  }, delay);

  const diceColor = useRef(randColorValue());
  const diceValue = useRef(randDiceValue());

  diceColor.current = determineDiceColor();
  diceValue.current = determineDiceValue();

  return (
    <OuterSpace color={camelToPrimaryColour[diceColor.current]}>
      <InnerSpace color={camelToSecondaryColour[diceColor.current]}>
        {diceValue.current}
      </InnerSpace>
    </OuterSpace>
  );
};
export default Dice;
