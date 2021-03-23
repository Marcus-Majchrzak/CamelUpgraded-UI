

export type RequestDataType = {
    players: Record<string, PlayerType>
    boardState: BoardStateType

}
export type PlayerType = {
    name: string,
    money: number,
    legBets: Array<LegBedType>
}
export type BoardStateType = {
    camelPositions: Array<Array<Camels>>
    legBids: Record<Camels, Array<number>>
    diceRolled: Array<DiceRollType>
}
export type DiceRollType = {
    color: Camels
    value: number
}
export type LegBedType = {
    value: number,
    camel: Camels,
}


export enum TileType {
    Oasis = 'oasis',
    Desert = 'desert'
}

export enum RaceBetTypes {
    Winner = 'winner',
    Loser  = 'loser'
} 
export enum Camels { 
    Blue ='blue',
    Red = 'red', 
    Green = 'green', 
    Orange = 'orange', 
    White = 'white'
}