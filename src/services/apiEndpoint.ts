import { IShortLinkResponse, IpostData } from "@/interfaces/LinkInterfaces"
import { apiService } from "./apiServices"


export const postShortURL = async (body: IpostData): Promise<IShortLinkResponse> => {
        const result = await apiService<any>('http://localhost:8081/api/shortlink','POST',body)
        return result
}