import React, { ChangeEvent, JSX } from "react";

type InputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: JSX.Element;
  type?: "text" | "password";
};

const Inputs = ({ value, onChange, type, children }: InputProps) => {
  return (
    <div className="border-2 rounded-[20px] py-1.5 px-1.5 w-[367px] border-[#BF2C0B] overflow-hidden relative flex">
      <input
        type={type ? type : "text"}
        placeholder="Cole seu link"
        className="w-full h-full font-sora font-light outline-none px-4 py-2 text-[#211D26]"
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default Inputs;
