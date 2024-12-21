import Alert from "@/components/Alert";
import useShortLink from "@/hooks/useShortLink";
import { copyToClipboard } from "@/utils/copyBoard";
import { endpointsData } from "@/app/dev/data/EndpointsViews";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Endpoints = () => {
  const { setMessage, msg, Setmsg } = useShortLink();
  

  return (
    <>
      {msg.status && (
        <div className="fixed top-0 z-20">
          <Alert
            title={msg.title}
            subtitle={msg.subtitle}
            colors={msg.color}
            handleCloseMsg={() =>
              Setmsg({
                title: "",
                subtitle: "",
                color: "green",
                status: false,
              })
            }
          />
        </div>
      )}

      <div className="px-10">
        {endpointsData.map((endpoint, index) => (
          <div
            key={index}
            tabIndex={index}
            className={`group  border-t-2 rounded-[8px] ${endpoint.colors}`}
          >
            <div className="w-full flex justify-between p-4 bg-gray-100 cursor-pointer">
              <h2 className="text-xl font-bold flex-1 ">{endpoint.title}</h2>
              <div className="text-blue-600">
                <span className="invisible text-blue-400 group-focus:visible">
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
                    <span className="font-semibold ">Parameters:</span>{" "}
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
                      className="flex  justify-center items-center px-[18px] py-1 rounded-[24px] border-[1px]  bg-[#034c8c] text-white m-4"
                      onClick={() => {
                        copyToClipboard(endpoint.exampleRequest)
                        setMessage(
                          "sucesso",
                          "o arquivo JSON foi enviado para sua area de transferencia",
                          "green",
                          true
                        );   
                      }}
                      >
                      Copiar
                    </motion.button>
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
