/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { B005, P200, P300 } from "./colours";
import { Camels, RaceBetTypes, TileType } from "./types";
import { WebSocketProps } from "./websocket";

const ActionButton = styled.button`
  width: 150px;
  height: 70px;
  background: ${P200};
  border-radius: 5px;
  margin: 10px 5px 10px 5px;
  font-size: 20px;
  :hover {
    background-color: ${P300};
  }
`;
const ActionSpace = styled.div`
  position: absolute;
  background: ${B005};
  borderradius: 20px;
  bottom: 10px;
  left: 10px;
  display: flex;
  flexdirection: row;
  padding: 0px 10px 0px 10px;
`;

const GameButtons = (props: WebSocketProps) => {
  return (
    <div
      css={{
        position: "absolute",
        background: B005,
        borderRadius: "20px",
        bottom: "10px",
        left: "10px",
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px 0px 10px",
      }}
    >
      <ActionButton onClick={props.sendMoveAction}>Move</ActionButton>
      <ActionButton onClick={() => props.sendLegBetAction(Camels.Blue)}>
        Leg Bet
      </ActionButton>
      <ActionButton
        onClick={() =>
          props.sendRaceBetAction(Camels.Blue, RaceBetTypes.Winner)
        }
      >
        Race Bet
      </ActionButton>
      <ActionButton onClick={() => props.sendTileAction(10, TileType.Oasis)}>
        Place Tile
      </ActionButton>
    </div>
  );
};
export default GameButtons;
