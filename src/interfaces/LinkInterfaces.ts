export interface IpostData {
    url: string 
    password: number | null
}

export interface IShortLinkResponse {
    message: string
    shortUrl: string
}

export interface IGetShortLinkResponse {
    shortUrl: string,
    url: string,
    security: boolean
}

export interface IPostUnlockPassword {
    shortUrl: string,
    password: number
}

export interface IResponseUnlockPassword {
    shortUrl:string,
    url: string,
    security: number
}