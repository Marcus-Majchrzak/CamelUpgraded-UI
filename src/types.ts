

export type RequestDataType = {
    players: Array<PlayerType>
    me: number
    playerTurn: number
    boardState: BoardStateType
}
export type PlayerType = {
    name: string,
    money: number,
    legBets: Array<LegBetType>
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
export type LegBetType = {
    value: number,
    camel: Camels,
}


export enum TileType {
    Oasis = "Oasis",
    Desert = "Desert"
}
export const strToTileType = (type: string): TileType => {
    switch (type.toLocaleLowerCase()){
        case('oasis'): 
            return TileType.Oasis
        case('desert'): 
            return TileType.Desert
    }
    throw `String Parameter is not a tile type: "${type}" (strToTileType)`
    
}

export enum RaceBetTypes {
    Winner = 'winner',
    Loser  = 'loser'
} 
export const strToRaceBetType = (type: string): RaceBetTypes => {
    switch (type.toLocaleLowerCase()){
        case('winner'): 
            return RaceBetTypes.Winner
        case('loser'): 
            return RaceBetTypes.Loser
    }
    throw `String Parameter is not a camel color: "${type}" (strToRaceBetType)`
    
}




export enum Camels { 
    Blue ='blue',
    Red = 'red', 
    Green = 'green', 
    Orange = 'orange', 
    White = 'white'
}
export const strToCamel = (camel: string): Camels => {
    switch (camel.toLocaleLowerCase()){
        case('blue'): 
            return Camels.Blue
        case('red'): 
            return Camels.Red
        case('green'): 
            return Camels.Green
        case('orange'): 
            return Camels.Orange
        case('white'): 
            return Camels.White
    }
    throw `String Parameter is not a camel color: "${camel}" (strToCamel)`
    
}