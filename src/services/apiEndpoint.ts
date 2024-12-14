import { IGetShortLinkResponse, IPostInfoLink, IPostUnlockPassword, IResponseInfoLink, IResponseUnlockPassword, IShortLinkResponse, IpostData } from "@/interfaces/LinkInterfaces"
import { apiService } from "./apiServices"
import { url } from "inspector"


export const postShortURLendpoint = async (body: IpostData): Promise<IShortLinkResponse> => {
        const result = await apiService<IShortLinkResponse>('http://localhost:8081/api/shortlink','POST',body)
        return result
}

export const getOriginalUrlendpoint = async (url: string): Promise<IGetShortLinkResponse> => {
         const result = await apiService<IGetShortLinkResponse>(`http://localhost:8081/api/getlink/${url}`)
         return result
}

export const postUnlockURLpasswrodendpoint = async (body: IPostUnlockPassword): Promise<IResponseUnlockPassword> => {
        const  result = await apiService<IResponseUnlockPassword>('http://localhost:8081/api/password',"POST",body)
        return result
}

export const postInfoURLendpoint = async (body: IPostInfoLink): Promise<IResponseInfoLink> => {
        const result = await apiService<IResponseInfoLink>("http://localhost:8081/api/password", "POST", body)
        return result
}