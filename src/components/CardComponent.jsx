import diceBtn from "../assets/images/icon-dice.svg";
import dividerImg from "../assets/images/pattern-divider-desktop.svg";
import mobileDividerImg from "../assets/images/pattern-divider-mobile.svg";
import { Card } from "flowbite-react";
import { getAdvice } from "../services/service.js";
import { useEffect, useState } from "react";

const CardComponent = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  const fetchAdvice = async () => {
    const adviceData = await getAdvice();
    setId(adviceData.slip.id);
    setAdvice(adviceData.slip.advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div className="flex p-5 items-center justify-center w-full h-screen">
        <Card
          id="adviceCard"
          className="border-0 relative p-6 rounded-lg w-full sm:w-2/3 md:w-1/3  shadow-lg text-center "
        >
          <p id="idTxt" className="tracking-widest">
            ADVICE #{id}
          </p>
          <p id="adviceTxt" className="">
            "{advice}"
          </p>
          <div className="w-full my-4">
            <img
              src={dividerImg}
              alt="Divider Img for Desktop"
              className="hidden md:block"
            />
            <img
              src={mobileDividerImg}
              alt="Divider Img for Mobile"
              className="block md:hidden"
            />
          </div>

          <button
            id="diceBtn"
            className=" cursor-pointer absolute -bottom-3 left-1/2 transform -translate-x-1/2 p-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600  hover:shadow-[0_0_10px_5px_rgba(34,197,94,1)] focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
            onClick={fetchAdvice}
          >
            <img src={diceBtn} alt="Dice Button Image" />
          </button>
        </Card>
      </div>
    </>
  );
};

export default CardComponent;
