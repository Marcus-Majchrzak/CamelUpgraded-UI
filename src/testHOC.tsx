import React, { useState, useCallback } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { Camels, RaceBetTypes, TileType } from './types';




export  interface WebSocketProps {
    areYouCool: () => void;
    areYouLame: () => void;
  }
  
export function withWebSocket(ChildComp: React.ComponentType<any | string>) {
    return function Websocket() {
      const areYouCool = () => console.log("You are very cool")
      const areYouLame = () => console.log("You are very lame")
      const websockets = {
        areYouCool,
        areYouLame,
      }
        return (
          <>
            <ChildComp areYouCool={areYouCool} areYouLame={areYouLame} />
          </>
        );
    };
  }