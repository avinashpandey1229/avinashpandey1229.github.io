export interface InsiderSentiment{
data:InsiderData[],
symbol:string
}

export interface InsiderData{
    change:number
    month:number,
    mspr:number
    symbol:string,
    year:string
}