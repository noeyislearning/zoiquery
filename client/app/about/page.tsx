import React from "react";

/** Components */
import FaqCard from "@/components/common/Cards/FAQCard";
import BackToTopButton from "@/components/common/Buttons/BackToTopButton";

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-bold text-white">Frequently asked questions</h2>
          <div className="mb-32 lg:mb-10 grid pt-8 text-left border-t border-gray-200 gap-4 lg:gap-4 dark:border-gray-700 md:grid-cols-2">
            <FaqCard faqsItems={[]}/>
          </div>
        </div>
      </section>
    </>
  )
}
