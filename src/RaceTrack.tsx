/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { B005, CB1, CG1, CO1, CR1, CW1, P300, P50 } from "./colours";
import { Camels, RaceBetTypes, TileType } from "./types";

const Camel = styled.div`
  background: ${(props) => props.color};
  height: 15px;
  width: 25px;
  margin: 0px 5px 0px 5px;
  border-radius: 7px 7px 0px 0px;
  border: 1px solid #000000;
`;
const Square = styled.div`
  background: ${P50};
  height: 10px;
  width: 30px;
  margin: 0px 5px 0px 5px;
  border: 1px solid #000000;
`;
const RaceTrackSpace = styled.div`
  position: absolute;
  left: 13%;
  bottom: 45%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
type RaceTrackType = {
  camelPositions: Array<Array<Camels>>;
};
const RaceTrack = (props: RaceTrackType) => {
  const camelToPrimaryColour = {
    blue: CB1,
    red: CR1,
    green: CG1,
    orange: CO1,
    white: CW1,
  };
  console.log(">!!", props);
  return (
    <RaceTrackSpace>
      {props.camelPositions.map((square) => (
        <Position>
          {square.reverse().map((camel) => (
            <Camel color={camelToPrimaryColour[camel]} />
          ))}
          <Square />
        </Position>
      ))}
    </RaceTrackSpace>
  );
};
export default RaceTrack;
