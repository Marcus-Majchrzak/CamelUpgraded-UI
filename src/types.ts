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
    legBids: Record<Camels, Array<LegBetType>>
    diceRolled: Array<DiceRollType>
    placedTiles: Record<number,TileType>
}
export type TileType = {
    playerId: number
    effect: TileEffectType
}
export type DiceRollType = {
    camel: Camels
    move: number
}
export type LegBetType = {
    value: number,
    camel: Camels,
}


export enum TileEffectType {
    Oasis = "OASIS",
    Mirage = "MIRAGE"
}
export const strToTileEffectType = (type: string): TileEffectType => {
    switch (type.toLocaleLowerCase()){
        case('oasis'): 
            return TileEffectType.Oasis
        case('mirage'): 
            return TileEffectType.Mirage
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
    Blue ='BLUE',
    Red = 'RED', 
    Green = 'GREEN', 
    Orange = 'ORANGE', 
    White = 'WHITE'
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