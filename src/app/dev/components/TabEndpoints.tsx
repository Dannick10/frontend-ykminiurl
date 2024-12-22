import { endpointsData } from "@/app/dev/data/EndpointsViews";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

type Endpoint = {
  exampleRequest: string;
};
type EndpointsTypes = {
  msg: (endpoint: Endpoint) => void;
};

const Endpoints = ({ msg }: EndpointsTypes) => {
  return (
    <>
      <div className="space-y-4">
        {endpointsData.map((endpoint, index) => (
          <div
            key={index}
            tabIndex={index}
            className={`group  border-2 rounded-[8px] text-sm`}
          >
            <div className="w-full flex items-center justify-between p-4 bg-gray-100 cursor-pointer select-none">
              <h2 className="text-lg font-bold flex-1 text-gray-800">
                {endpoint.title}
              </h2>
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
                <p className="">{endpoint.subtitle}</p>
                <p>
                  <span className="font-semibold">Method:</span>{" "}
                  <span className="uppercase">{endpoint.type}</span>
                </p>
                {endpoint.params && (
                  <p className="bg-gray-100 p-4 rounded">
                    <span className="font-semibold">Parameters:</span>{" "}
                    {endpoint.params}
                  </p>
                )}

                {endpoint.exampleRequest && (
                  <>
                    <div className="mt-2">
                      <span className="font-semibold">Example Request:</span>
                      <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-x-auto">
                        {endpoint.exampleRequest}
                      </pre>
                    </div>
                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{
                          scale: [1, 1.2, 1],
                        }}
                        whileTap={{
                          scale: [1, 0.8, 1],
                        }}
                        transition={{ duration: 0.5 }}
                        className="flex  justify-center items-center px-[18px] py-1 rounded-[24px] border-[1px]  bg-orange-600 text-white m-4"
                        onClick={() => msg(endpoint)}
                      >
                        Copiar
                      </motion.button>
                    </div>
                  </>
                )}

                {endpoint.exampleResponse && (
                  <>
                    <div className="mt-2">
                      <span className="font-semibold">Example Reponse:</span>
                      <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-x-auto">
                        {endpoint.exampleResponse}
                      </pre>
                    </div>      
                  </>
                )}
                <div>
                  <h3 className="font-semibold">Responses:</h3>
                  <ul className="list-disc space-y-1 py-4 pl-5">
                    {endpoint.responses.map((response, responseIndex) => (
                      <li
                        key={responseIndex}
                        className={`
                      ${response.text.includes("202") && "text-green-600"}
                      ${response.text.includes("200") && "text-green-600"}
                      ${response.text.includes("401") && "text-yellow-600"}
                      ${response.text.includes("403") && "text-yellow-600"}
                      ${response.text.includes("404") && "text-yellow-600"}
                      ${response.text.includes("500") && "text-red-600"}
                        
                        `}
                      >
                        {response.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Endpoints;
