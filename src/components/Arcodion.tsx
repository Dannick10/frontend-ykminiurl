import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  dataBase: {title: string, subtitle: string}[];
};

const Arcodion = ({ dataBase }: Props) => {
  return (
    <div className="space-y-4">
      {dataBase.map((date, index) => (
        <div
          key={index}
          tabIndex={index}
          className={`group  border-2 rounded-[8px] text-sm`}
        >
            <div className="w-full flex items-center justify-between p-4 bg-gray-100 cursor-pointer select-none">
              <h2 className="text-lg font-bold flex-1 text-gray-800 ">{date.title}</h2>
              <div className="text-orange-600">
                <span className="invisible text-orange-400 group-focus:visible">
                  <IoIosArrowUp />
                </span>
                <span className="visible group-focus:invisible">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>

            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 border-2 border-t-0 border-double">
              <div className="p-4 space-y-2">
                <p className="text-gray-800">{date.subtitle}</p>
                </div>
                </div>

        </div>
      ))}
    </div>
  );
};

export default Arcodion;
