/** @jsxImportSource @emotion/react */
import "./App.css";
import { P500, B004 } from "./colours";
import Game from "./Game";

function App() {
  return (
    <div
      css={{
        fontFamily: "Noto Sans",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: "auto",
      }}
    >
      <div
        css={{
          background: B004,
          height: "calc(100% - 15px)",
          padding: "0px 15px 15px 15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          css={{
            fontSize: "48px",
            lineHeight: "65px",
            color: P500,
          }}
        >
          CamelUpgraded
        </span>
        <Game />
      </div>
    </div>
  );
}

export default App;
