'use client'

import { postShortURL } from "@/services/apiEndpoint";
import { useState } from "react"
import { IShortLinkResponse, IpostData } from "@/interfaces/LinkInterfaces";
import { isPrerenderInterruptedError } from "next/dist/server/app-render/dynamic-rendering";
const useShortLink = () => {

    const [url, Seturl] = useState<any>()

    const [password, Setpassword] = useState<any>(null)

    const [shortUrl, SetshortURL] = useState<string>()

    const [msg,Setmsg] = useState<any>({
        title: "",
        subtitle: "",        
        colors: "",
        status: false, 
    })
    const [loading, SetLoading] = useState<boolean>(false)

    const createShortLink = async ()  => {

        if(!url) {
            return
        }


        const postData: IpostData = {
          url: url,
          password: password
        };
        
        SetLoading(true)
        try {
          const response = await postShortURL(postData);

          Setmsg({
            title: "sucesso",
            subtitle: response.message,
            color: "green",
            status: true, 
          })

          SetshortURL(response.shortUrl)
          console.log({shortUrl})


          console.log('Short URL:', response); 
        } catch (error) {
          console.error('Erro ao criar o link curto:', error);
          if (error ) {
            Setmsg({
                title: "error",
                subtitle: error.message,
                color: "red",
                status: true, 
              })

          }
        }
        SetLoading(false)
      };      

  return {
    createShortLink,
    msg,
    password,
    Setpassword,
    shortUrl,
    url,
    Seturl,
    loading,
  }
}

export default useShortLink