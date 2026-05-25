"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How should I take it?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Are there any restrictions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    question: "Is it safe?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
  },
  {
    question: "When will I notice results?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, turpis molestie dictum semper, sem tortor aliquam magna, eu faucibus justo ante nec neque. Pellentesque habitant morbi tristique senectus.",
  },
  {
    question: "What is Garaherb?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 mb-10">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-lg border border-gray-700 bg-white overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="text-sm sm:text-base font-medium text-[#111] font-inter">
              {faq.question}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 border-t border-gray-200">
              <p className="text-sm sm:text-base text-gray-600 font-inter leading-relaxed pt-3">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
