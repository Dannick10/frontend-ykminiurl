import Router from "next/router";
import { useEffect } from "react";
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdsBannerProps {
  "data-ad-slot": string;
  "data-ad-format": string;
  "data-full-width-responsive": string;
  "data-ad-layout"?: string;
}

const AdComponent = (props: AdsBannerProps) => {
  useEffect(() => {
    const handleRouteChange = () => {
      const intervalId = setInterval(() => {
        try {
          if (window.adsbygoogle) {
            window.adsbygoogle.push({});
            clearInterval(intervalId);
          }
        } catch (err) {
          console.error("Error pushing ads: ", err);
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    };

    handleRouteChange();

    if (typeof window !== "undefined") {
      Router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        Router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize mt-2"
      style={{
        display: "block",
        overflow: "hidden",
      }}
      data-adtest="on"
      data-ad-client="ca-pub-4567665986142588"
      {...props}
    />
  );
};
export default AdComponent;
