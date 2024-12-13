import { IShortLinkResponse, IpostData } from "@/interfaces/LinkInterfaces"
import { apiService } from "./apiServices"


export const postShortURLendpoint = async (body: IpostData): Promise<IShortLinkResponse> => {
        const result = await apiService<any>('http://localhost:8081/api/shortlink','POST',body)
        return result
}

export const getOriginalUrlendpoint = async (url: string) => {
         const result = await apiService<any>(`http://localhost:8081/api/getlink/${url}`)
         return result
}