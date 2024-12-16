import React, { ChangeEvent, JSX } from "react";
import { motion } from "framer-motion"
type InputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: JSX.Element;
  type?: "text" | "password";
};

const Inputs = ({ value, onChange, type, children }: InputProps) => {
  return (
    <motion.div 
    whileHover={{
      scale: 1.01,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    }}
    className="border-2 rounded-[20px] py-1.5 px-1.5 w-[367px] border-[#BF2C0B] overflow-hidden relative flex">
      <motion.input  
        whileFocus={{
          paddingLeft: "30px"
        }}
        type={type ? type : "text"}
        placeholder="Cole seu link"
        className="w-full h-full font-sora font-light outline-none px-4 py-2 text-[#211D26]"
        value={value}
        onChange={onChange}
      />
      {children}
    </motion.div>
  );
};

export default Inputs;
