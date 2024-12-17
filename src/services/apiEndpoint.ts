import { IGetShortLinkResponse, IPostInfoLink, IPostUnlockPassword, IResponseInfoLink, IResponseUnlockPassword, IShortLinkResponse, IpostData } from "@/interfaces/LinkInterfaces"
import { apiService } from "./apiServices"
export const postShortURLendpoint = async (body: IpostData): Promise<IShortLinkResponse> => {
        const result = await apiService<IShortLinkResponse>('/shortlink','POST',body)
        return result
}

export const getOriginalUrlendpoint = async (url: string): Promise<IGetShortLinkResponse> => {
         const result = await apiService<IGetShortLinkResponse>(`/getlink/${url}`)
         return result
}

export const postUnlockURLpasswrodendpoint = async (body: IPostUnlockPassword): Promise<IResponseUnlockPassword> => {
        const  result = await apiService<IResponseUnlockPassword>('/password',"POST",body)
        return result
}

export const postInfoURLendpoint = async (body: IPostInfoLink): Promise<IResponseInfoLink> => {
        const result = await apiService<IResponseInfoLink>("/info", "POST", body)
        return result
}