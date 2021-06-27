/*COLOUR KEY
BX  = White with X% opacity
PX  = Primary colour with X saturation
SX  = Secondary colour with X saturation
CXY = Colour for camel X, type Y
MX  = Misc of type X
*/

import { Camels } from "./types";

//Shades
export const White = '#ffffff';
export const B004  = '#121212';
export const B005  = 'rgba(255, 255, 255, 0.05)';
export const B015  = '#404040'
export const B032  = 'rgba(255, 255, 255, 0.32)';
export const B070  = 'rgba(255, 255, 255, 0.70)';
export const Black = '#000000';

//Primary Colour Range
export const P500 = '#ff9900';
export const P400 = '#ffa826';
export const P300 = '#ffb84d';
export const P200 = '#ffcd80';
export const P50  = '#fff3e0';

//Secondary Colour Range
export const S200 = '#bae2ff';
export const S300 = '#46BDFF'



//Misc colours
export const MCASH = '#FFD54F'
export const TRANS = 'rgba(255, 255, 255, 0.00)'


//Camel Colours
export const CB1 = "#00BCD4"
export const CB2 = "#B2EBF2"

export const CR1 = "#EF5350"
export const CR2 = "#FFCDD2"

export const CO1 = "#FFB74D"
export const CO2 = "#FFE0B2"

export const CG1 = "#66BB6A"
export const CG2 = "#A5D6A7"

export const CW1 = "#F5F5F5"
export const CW2 = "#E0E0E0"

export const camelToPrimaryColour = {
    [Camels.BLUE]: CB1,
    [Camels.RED]: CR1,
    [Camels.GREEN]: CG1,
    [Camels.ORANGE]: CO1,
    [Camels.WHITE]: CW1,
  };
  export const camelToSecondaryColour = {
    [Camels.BLUE]: CB2,
    [Camels.RED]: CR2,
    [Camels.GREEN]: CG2,
    [Camels.ORANGE]: CO2,
    [Camels.WHITE]: CW2,
  };