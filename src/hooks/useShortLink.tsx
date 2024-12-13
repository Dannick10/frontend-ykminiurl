"use client";

import {
  getOriginalUrlendpoint,
  postShortURLendpoint,
} from "@/services/apiEndpoint";
import { useEffect, useState } from "react";
import { IpostData } from "@/interfaces/LinkInterfaces";
import linkTratament from "@/utils/LinkTratament";

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
  shorturl?: string;
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
          shorturl: response.shortUrl,
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
          shorturl: response.shortUrl,
          security: response.security,
        });
      } catch (error) {
        handleError(error);
      }
    });
  };

  return {
    getOriginalLink,
    createShortLink,
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
