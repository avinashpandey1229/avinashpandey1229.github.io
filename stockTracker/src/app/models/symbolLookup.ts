export interface SymbolLookup{
count:number,
result:SymbolResult[]
}
export interface SymbolResult{
    description:string
    displaySymbol:string
    symbol:string
    type:string
}