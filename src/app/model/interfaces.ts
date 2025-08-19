export interface statusCounts{
    status_stage:string,
    count:number
}

export interface PendingLine{
    Report_Status:string,
    count:number
}

export interface UserBar{
    name:string,
    ApprovedReport_Count:number
}


export interface Filter{
    LineNum:string,
    FromDate:string,
    ToDate:string
}