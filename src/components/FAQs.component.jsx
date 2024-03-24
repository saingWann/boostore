import React, { useState } from "react";
import ContainerComponent from "./Container.component";
import { ChevronDown } from "lucide-react";
import { faqsData } from "../lib/faqs";

const FAQsComponent = () => {
  const [isOpen, setIsOpen] = useState({ currentOpenTag: null, show: false });

  const handleClick = (index) => {
    if (isOpen.currentOpenTag !== index) {
      setIsOpen({ ...isOpen, currentOpenTag: index, show: true });
    } else {
      setIsOpen({ ...isOpen, currentOpenTag: index, show: !isOpen.show });
    }
  };
  return (
    <section className="lg:py-20 py-10 max-sm:px-6">
      <ContainerComponent>
        <div className="flex lg:flex-row md:flex-col flex-col gap-10 items-start justify-start">
          <div className="lg:w-1/2 md:w-1/2 w-full max-sm:px-4">
            <p className="lg:text-5xl md:text-3xl text-2xl font-bold uppercase lg:mb-10 mb-5">
              Frequent Ask Questions
            </p>
            <p className="lg:text-xl text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              fugit. Reiciendis dignissimos molestias, aliquid eum maiores
              veniam iure quod esse, omnis obcaecati eos nihil nisi cum atque
              quasi vel? Dolorem.
            </p>
          </div>

          <ul className="lg:w-1/2 md:w-1/2 w-full flex flex-col gap-3">
            {faqsData.map((faq, index) => (
              <li key={index}>
                <span
                  className={`flex justify-between items-center border-b py-3 px-6 border-black ${
                    isOpen.show && isOpen.currentOpenTag === index
                      ? "bg-gradient-to-r from-black to-black/80 text-white rounded-t-lg"
                      : ""
                  }`}
                >
                  <p
                    onClick={() => handleClick(index)}
                    className={`font-bold w-full cursor-pointer lg:text-base md:text-base text-sm`}
                  >
                    {faq.question}
                  </p>
                  <button
                    onClick={() => handleClick(index)}
                    className={` transition-all duration-500 ${
                      isOpen.show && isOpen.currentOpenTag === index
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  >
                    <ChevronDown />
                  </button>
                </span>
                <p
                  className={` px-6 rounded-b-xl shadow-md transition-all ease-in-out duration-300 bg-gray-50 overflow-hidden *:lg:text-base md:text-base text-sm 
                  ${
                    isOpen.show && isOpen.currentOpenTag === index
                      ? "h-fit lg:py-8 py-4"
                      : "h-0"
                  }`}
                >
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default FAQsComponent;
