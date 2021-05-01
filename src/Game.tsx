/** @jsxImportSource @emotion/react */
import { B005 } from "./colours";
import GameButtons from "./GameButtons/GameButtons";
import RaceTrack from "./RaceTrack";
import DiceTrack from "./DiceTrack";
import PlayerBar from "./PlayerBar";
import { WebSocketProps, withWebSocket } from "./websocket";
import PlayerAssets from "./PlayerAssets";
import Announcer from "./Announcer";
import styled from "@emotion/styled";
import LegBids from "./LegBids";
import { useState } from "react";

const GameArea = styled.div`
  position: relative;
  background: ${B005};
  border-radius: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TrackArea = styled.div`
  position: fixed;
  width: 840px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin-top: -175px;
  margin-left: -420px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LegBetArea = styled.div`
  position: fixed;
  top: 50%;
`;

const Game = (props: WebSocketProps) => {
  const [isTileActivated, setTileActivated] = useState(false);
  const [selectedTile, setSelectedTile] = useState(-1);
  console.log(">>>! ", props);
  if (!props.data) {
    return <>Loading</>;
  }
  const { boardState, players, playerTurn, me } = props.data;
  const isMyTurn = me === playerTurn;
  console.log(isMyTurn, me, playerTurn);

  const selectTile = (tile: number) => {
    setSelectedTile(tile);
  };

  return (
    <GameArea>
      <PlayerBar players={players} playerTurn={playerTurn} />
      {boardState ? (
        <>
          <LegBetArea>
            <LegBids legBids={boardState.legBids} />
          </LegBetArea>
          <TrackArea>
            <Announcer
              players={players}
              playerTurn={playerTurn}
              isMyTurn={isMyTurn}
            />
            <RaceTrack
              camelPositions={boardState.camelPositions}
              placedTiles={boardState.placedTiles}
              isTileActivated={isTileActivated}
              selectTile={selectTile}
            />
            <DiceTrack diceRolled={boardState.diceRolled} />
          </TrackArea>
        </>
      ) : (
        "Loading"
      )}
      <GameButtons
        actionFunctions={props.actionFunctions}
        isDisabled={!isMyTurn}
        selectedTile={selectedTile}
        setSelectedTile={setSelectedTile}
        setTileActivated={setTileActivated}
      />
      <PlayerAssets {...players[me]} />
    </GameArea>
  );
};

const withHoc = withWebSocket(Game);
export default withHoc;
