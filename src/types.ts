

export type RequestDataType = {
    players: any
    boardState: BoardStateType

}
export type BoardStateType = {
    camelPositions: Array<Array<Camels>>
    legBids: Record<Camels, Array<Number>>
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