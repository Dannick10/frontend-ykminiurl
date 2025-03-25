"use client"

import Script from "next/script"

export default function GoogleAdsenseScript() {
  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4567665986142588"
        crossOrigin="anonymous"
      />
    </>
  )
}

