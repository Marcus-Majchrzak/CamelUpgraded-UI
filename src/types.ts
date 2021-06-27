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
        default:
            throw new Error(`String Parameter is not a tile type: "${type}" (strToTileType)`)
    }
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
        default:
            throw new Error(`String Parameter is not a camel color: "${type}" (strToRaceBetType)`)
    }
}

export enum Camels { 
    BLUE ='BLUE',
    RED = 'RED', 
    GREEN = 'GREEN', 
    ORANGE = 'ORANGE', 
    WHITE = 'WHITE'
}
export const strToCamel = (camel: string): Camels => {
    switch (camel.toLocaleLowerCase()){
        case('blue'): 
            return Camels.BLUE
        case('red'): 
            return Camels.RED
        case('green'): 
            return Camels.GREEN
        case('orange'): 
            return Camels.ORANGE
        case('white'): 
            return Camels.WHITE
        default:
            throw new Error(`String Parameter is not a camel color: "${camel}" (strToCamel)`)
    }
}