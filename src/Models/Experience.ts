export interface Experience{
    _id:string
    job_title : string
    company_name : string
    start_month:string
    start_year : number
    end_month : string
    end_years? : number
    tasks: (string[]|string)[]
    created_at : Date
    updated_at : Date

}