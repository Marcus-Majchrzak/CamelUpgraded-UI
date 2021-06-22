/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { camelToPrimaryColour, P200, P50 } from "./colours";
import { Camels, TileType, TileEffectType } from "./types";

const Camel = styled.div`
  background: ${(props) => props.color};
  height: 15px;
  width: 25px;
  margin: 0px 5px 0px 5px;
  border-radius: 7px 7px 0px 0px;
  border: 1px solid #000000;
`;
const Square = styled.div<SquareType>`
  background: ${P50};
  height: 10px;
  width: 30px;
  margin: 0px 5px 0px 5px;
  border: 1px solid #000000;
  :hover {
    background-color: ${(props) => (props.isTileActivated ? P200 : P50)};
    background-color: ${(props) => (props.isTileActivated ? P200 : P50)};
  }
`;
const RaceTrackSpace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  min-height: 100px;
`;
const Position = styled.div`
  display: flex;
  flex-direction: column;
`;
type SquareType = {
  isTileActivated: boolean;
};
type RaceTrackType = {
  camelPositions: Array<Array<Camels>>;
  placedTiles: Record<number, TileType>;
  isTileActivated: boolean;
  selectTile: (space: number) => void;
};
const RaceTrack = (props: RaceTrackType) => {
  const { camelPositions, placedTiles, isTileActivated, selectTile } = props;
  const onSquareClick = (space: number) => {
    if (isTileActivated) {
      selectTile(space);
    }
  };
  const tileEffectToEmoji: Record<TileEffectType, String> = {
    [TileEffectType.Oasis]: "🏝️",
    [TileEffectType.Mirage]: "🏜️",
  };
  return (
    <RaceTrackSpace>
      {camelPositions.map((square, space) => (
        <Position key={space}>
          {square
            .slice()
            .reverse()
            .map((camel, index) => (
              <Camel color={camelToPrimaryColour[camel]} key={index} />
            ))}
          {placedTiles.hasOwnProperty(space) &&
            tileEffectToEmoji[placedTiles[space].effect]}
          <Square
            onClick={() => onSquareClick(space)}
            isTileActivated={isTileActivated}
          />
        </Position>
      ))}
    </RaceTrackSpace>
  );
};
export default RaceTrack;
