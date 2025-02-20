import { useEffect, useRef } from "react";

interface Window {
    adsbygoogle: {[key: string]: unknown}[]
  }

const AdComponent = () => {
  const adLoaded = useRef(false);

  useEffect(() => {
    if (!adLoaded.current) {
      try {
        (window as Window).adsbygoogle = (window as Window).adsbygoogle || [];
        (window as Window).adsbygoogle.push({});
        adLoaded.current = true;
      } catch (err) {
        console.error("Erro ao carregar AdSense:", err);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-4567665986142588"
      data-ad-slot="2645846225"
    ></ins>
  );
};

export default AdComponent;
