import React from 'react'

/** React Icons */
import {FiArrowUpRight} from "react-icons/fi";

/** Interfaces/Props */
import { FAQsItemsProps } from "@/assets/interfaces/faqs"

/** Models */
import faqsItems from "@/assets/models/faqs.json"

export default function FaqCard({} : FAQsItemsProps) {

  const faqs = faqsItems.faqs;

  return (
    <>
      {faqs.map((faq, index) => (
        <div
            key={index}
            className="p-4 text-white border border-purple-500 hover:border-purple-700 rounded-md">
          <div className="mb-4 flex gap-1 items-center">
            <FiArrowUpRight className="w-7 h-7"/>
            <h3 className="text-lg font-medium ">
              {faq.question}
            </h3>
          </div>
          <p className="text-gray-400">
            {faq.answer}
          </p>
        </div>
      ))}
    </>
  )
}
