"use client";

import React from "react";
import Endpoints from "./components/TabEndpoints";

const Page = () => {

  return (
    <>
    <div id="accordion-collapse" data-accordion="collapse" className="space-y-8 py-8">
      <Endpoints />
      
    </div>
  </>
  );
};

export default Page;
