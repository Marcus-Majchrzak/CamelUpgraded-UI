/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { camelToPrimaryColour, P50 } from "./colours";
import { Camels } from "./types";

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
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 100px;
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
