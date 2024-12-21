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


type getUrl = {
  originalUrl?: string;
  createdAt?: string;
  clicks?: number;
  shortUrl?: string;
  url?: string;
  security?: boolean;
};

interface MsgType {
  title: string;
  subtitle: string;
  color: "red" | "yellow" | "green";
  status: boolean;
}

const useShortLink = () => {
  const [url, Seturl] = useState<string>("");

  const [password, Setpassword] = useState<string>("");

  const [shortUrl, SetshortURL] = useState<getUrl | null>();

  const [msg, Setmsg] = useState<MsgType>({
    title: "",
    subtitle: "",
    color: "green",
    status: false,
  });
  const [loading, SetLoading] = useState<boolean>(false);

  const setMessage = (
    title: string,
    subtitle: string,
    color: "red" | "yellow" | "green",
    status: boolean
  ) => {
    Setmsg({ title, subtitle, color, status });
  };

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      console.log(error);
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
    const time = 3000
    if (msg?.status) {
      const timeout = setTimeout(() => {
        Setmsg({ title: "", subtitle: "", color: "green", status: false });
      }, time);
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
        Seturl("");
      } catch (error) {
        handleError(error);
        Seturl("");
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

    const regexUrl = /link=([^&]+)/;
    const match = url.match(regexUrl);
    const result = match ? match[1] : "";

    const postInfoData: IPostInfoLink = {
      shortUrl: result,
      password: password,
    };

    await withLoading(async () => {
      try {
        const response = await postInfoURLendpoint(postInfoData);
        
        if(response) {
          setMessage(
            "seu link está liberado",
            response.message,
            "green",
            true
          );
        }
        
        SetshortURL({
          originalUrl: response.originalUrl,
          shortUrl: response.shortUrl,
          clicks: response.clicks,
          createdAt: response.createdAt,
        });

      } catch (error) {
        handleError(error);
      }
    });
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
    setMessage
  };
};

export default useShortLink;
