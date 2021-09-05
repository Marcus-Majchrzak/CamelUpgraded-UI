import styled from "@emotion/styled";
import { B015, B032 } from "./colours";
import { PlayerType } from "./types";

const ExitTitle = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 1;
  color: ${B032};
`;

const ExitBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
`;

const ExitModal = styled.div`
  z-index: 1;
  position: absolute;
  width: 70vh;
  height: 40vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${B015};
  border-radius: 18px;
`;

type EndScreenType = {
  players: Array<PlayerType>;
};
const EndScreen = (props: EndScreenType) => {
  return (
    <ExitBackground>
      <ExitModal>
        <ExitTitle>
          Race Finished
          {props.players.forEach((player) => {
            JSON.stringify(player.incomeTable);
          })}
        </ExitTitle>
      </ExitModal>
    </ExitBackground>
  );
};
export default EndScreen;
