import React from "react";
import erro from "/public/error404.svg";
import Image from "next/image";
const custom404 = () => {
  return (
    <section className="h-screen flex flex-col lg:flex-row items-center justify-center gap-10">
      <Image src={erro} alt="error404 message" width={500} height={480}  />
    </section>
  );
};

export default custom404;
