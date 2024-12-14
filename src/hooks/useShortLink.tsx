"use client";

import {
  getOriginalUrlendpoint,
  postInfoURLendpoint,
  postShortURLendpoint,
  postUnlockURLpasswrodendpoint,
} from "@/services/apiEndpoint";
import { useEffect, useState } from "react";
import {
  IPostInfoLink,
  IPostUnlockPassword,
  IpostData,
} from "@/interfaces/LinkInterfaces";
import linkTratament from "@/utils/LinkTratament";
import { error } from "console";

type errorObject = {
  message: string;
};

type msg = {
  title: string;
  subtitle: string;
  colors: string;
  status: boolean;
} | null;

type getUrl = {
  shortUrl?: string;
  url?: string;
  security?: boolean;
};
const useShortLink = () => {
  const [url, Seturl] = useState<string | null>("");

  const [password, Setpassword] = useState<any>(null);

  const [shortUrl, SetshortURL] = useState<getUrl | null>();

  const [msg, Setmsg] = useState<any>({
    title: "",
    subtitle: "",
    color: "",
    status: false,
  });
  const [loading, SetLoading] = useState<boolean>(false);

  const setMessage = (
    title: string,
    subtitle: string,
    color: string,
    status: boolean
  ) => {
    Setmsg({ title, subtitle, color, status });
  };

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      setMessage("error", error.message, "red", true);
    } else {
      setMessage("error", "Ocorreu um erro desconhecido.", "red", true);
    }
  };

  const withLoading = async (callback: () => Promise<void>) => {
    SetLoading(true);
    try {
      await callback();
    } finally {
      SetLoading(false);
    }
  };

  useEffect(() => {
    if (msg?.status) {
      const timeout = setTimeout(() => {
        Setmsg({ title: "", subtitle: "", color: "", status: false });
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [msg]);

  const createShortLink = async () => {
    if (!url) {
      setMessage("atenção", "É necessario digitar uma URL", "yellow", true);
      return;
    }

    const postData: IpostData = { url, password };

    await withLoading(async () => {
      try {
        const response = await postShortURLendpoint(postData);
        setMessage("sucesso", response.message, "green", true);
        SetshortURL({
          shortUrl: response.shortUrl,
        });
        Seturl(null);
      } catch (error) {
        handleError(error);
        Seturl(null);
      }
    });
  };

  const getOriginalLink = async (url: string) => {
    await withLoading(async () => {
      try {
        const response = await getOriginalUrlendpoint(url);
        if (response.security) {
          setMessage(
            "atenção",
            "Esse link possui senha, para acessar é precisso digitar a senha no campo abaixo",
            "yellow",
            true
          );
        } else {
          setMessage(
            "sucesso",
            "seu link está pronto para ser acessado, clique no botão abaixo",
            "green",
            true
          );
        }

        const newUrl = linkTratament(response.url);

        SetshortURL({
          url: newUrl,
          shortUrl: response.shortUrl,
          security: response.security,
        });
      } catch (error) {
        handleError(error);
      }
    });
  };
  const postUnlockLink = async (url: string) => {
    if (!url) {
      setMessage("Atenção", "Há um erro com a url", "yellow", true);
      return;
    }

    if (!password) {
      setMessage("Atenção", "É necessario preencher o campo", "yellow", true);
      return;
    }

    const PostUnlockData: IPostUnlockPassword = {
      shortUrl: url,
      password: password,
    };

    await withLoading(async () => {
      try {
        const response = await postUnlockURLpasswrodendpoint(PostUnlockData);
        const newUrl = linkTratament(response.url);
        SetshortURL({
          url: newUrl,
          shortUrl: url,
        });
        Setpassword("");
        setMessage(
          "sucesso",
          "seu link está pronto para ser acessado, clique no botão abaixo",
          "green",
          true
        );
      } catch (error) {
        handleError(error);
        Setpassword("");
      }
    });
  };

  const postInfoLink = async () => {
   
    
    if (!url) {
      setMessage("Atenção", "Há um erro com a url", "yellow", true);
      return;
    }
    
    let regexUrl = /link=([^&]+)/;
    let match = url.match(regexUrl);
    let result = match ? match[1] : "";

    

    const postInfoData: IPostInfoLink = {
      shortUrl: result,
      password: password,
    };
    
      await (withLoading(async () => {
          try{
             const response = await postInfoURLendpoint(postInfoData)
             /*Amanhã continuo */
          }catch(error) {

          }
      }))
      
  };

  return {
    postInfoLink,
    getOriginalLink,
    createShortLink,
    postUnlockLink,
    msg,
    loading,
    shortUrl,
    url,
    Seturl,
    password,
    Setpassword,
    Setmsg,
  };
};

export default useShortLink;
