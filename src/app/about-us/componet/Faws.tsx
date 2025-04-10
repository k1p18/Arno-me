"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Faws = () => {
  const faq = [
    {
      id: 1,
      question: "What is Fancy Tailwind?",
      answer:
        "Fancy Tailwind is a collection of Tailwind CSS UI components designed to make your development faster and cleaner. It helps you avoid repetitive design tasks.",
    },
    {
      id: 2,
      question: "How do I install it?",
      answer:
        "You can install Fancy Tailwind components by copying the code snippets from the documentation or integrating it via npm in supported setups.",
    },
    {
      id: 3,
      question: "Can I customize components?",
      answer:
        "Absolutely! All components are built using Tailwind CSS utility classes, so you can easily customize them according to your project's needs.",
    },
    {
      id: 4,
      question: "Is it free to use?",
      answer:
        "Yes, Fancy Tailwind is completely free and open-source. Use it in personal or commercial projects without restriction.",
    },
    {
      id: 5,
      question: "Is it responsive?",
      answer:
        "All components are built mobile-first and are fully responsive by default using Tailwind's responsive classes.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen py-10">
      <div className="my-8 mx-auto max-w-4xl flex flex-col items-center">
        <img
          src="https://fancytailwind.com/static/faq1-8ef2a6c2addbed9f838eea20b9ad21b6.png"
          alt="Frequently Asked Questions"
          className="w-full h-auto mb-6"
        />
        <h2 className="text-center text-2xl sm:text-4xl text-sky-600 tracking-widest font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <dl className="mx-auto mb-10 max-w-4xl px-4 space-y-4">
        {faq.map((item) => (
          <Disclosure key={item.id}>
            {({ open }) => (
              <>
                <dt
                  className={`group w-full border border-sky-600 rounded-md transition-all duration-200 ${
                    open ? "bg-sky-600 text-white" : "bg-white text-gray-800"
                  } hover:bg-sky-600 hover:text-white`}
                >
                  <Disclosure.Button className="w-full flex justify-between items-center py-4 px-5 text-left">
                    <span className="text-lg md:text-xl font-semibold">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        open
                          ? "rotate-180 text-white"
                          : "text-sky-600 group-hover:text-white"
                      }`}
                    />
                  </Disclosure.Button>
                </dt>
                <dd>
                  <Disclosure.Panel className="bg-white text-gray-600 text-xl px-5 py-4 border border-t-0 border-sky-600 rounded-b-md">
                    {item.answer}
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

export default Faws;
