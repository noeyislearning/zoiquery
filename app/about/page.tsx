import React from "react";

/** React Icons */
import { FiArrowUpRight } from "react-icons/fi";

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-bold text-white">Frequently asked questions</h2>
          <div className="mb-10 grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div className="text-white">
              <div className="mb-4 flex gap-1 items-center">
                <FiArrowUpRight className="w-7 h-7"/>
                <h3 className="text-lg font-medium ">
                  What is Zoiquery
                </h3>
              </div>
              <p className="text-gray-400">
                Zoiquery is a robust repository that leverages TypeScript, Node.js, and the openai npm library to dynamically generate SQL queries. It allows developers to construct SQL statements programmatically, facilitating an enhanced workflow and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
