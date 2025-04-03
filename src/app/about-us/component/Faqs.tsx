import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Faqs = () => {
  const faq = [
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* :TITLE & IMAGE */}
      <div className="my-8 mx-auto max-w-4xl flex flex-col items-center">
        <img
          src="https://fancytailwind.com/static/faq1-8ef2a6c2addbed9f838eea20b9ad21b6.png"
          alt="Frequently Asked Questions"
          className="w-full h-full"
        />
        <h2 className="text-center text-2xl sm:text-4xl text-sky-600 tracking-widest">
          Frequently Asked Questions 1
        </h2>
      </div>

      <dl className="mx-auto mb-10 p-2 max-w-4xl flex flex-col items-center">
        {faq.map((faq) => (
          <Disclosure key={faq.number}>
            {({ open }) => (
              <>
                {/* Question */}
                <dt
                  className={`group w-full border-b-2 border-sky-600 text-gray-800 hover:bg-sky-600 hover:text-white ${
                    open && "bg-sky-600 text-white"
                  }`}
                >
                  <Disclosure.Button className="py-5 px-3 w-full flex justify-between items-center">
                    <span className="text-lg md:text-xl text-left font-semibold">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open && "transform rotate-180 text-white"
                      } flex-shrink-0 ml-2 w-7 h-7 text-sky-600 group-hover:text-white`}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                </dt>
                
                <dd className="w-full text-base text-gray-500">
                  <Disclosure.Panel className="px-4 pt-4 pb-2">
                    {faq.answer}
                  </Disclosure.Panel>
                </dd>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
};

export default Faqs;
