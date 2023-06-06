import React from 'react'

// Importing React Icons
import { IoSendSharp, IoCopyOutline } from "react-icons/io5";

export default function Home() {
  return (
      <>
        <section>
          {/* Prompt Section */}
          <div className="pt-20 w-full max-w-screen flex justify-center">
            <div className="p-4 mx-auto h-[50vh] w-[80vw] overflow-y-auto">
              <div className="flex flex-col justify-between">
                {/* Prompts */}
                <div className="mb-4 py-4 px-4 bg-gray-800 rounded-md text-gray-300">
                  <div className="flex flex-row gap-5 items-start text-sm justify-between">
                    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gradient-to-r from-yellow-400 to-rose-500 rounded-md">
                      <span className="font-bold text-white">Z</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="font-medium">Lorem Ipsum</div>
                      <div className="font-mono">
                        SELECT column1, column2, ... <br />
                        FROM table_name;
                      </div>
                    </div>
                    <button>
                      <IoCopyOutline className="w-5 h-5"/>
                    </button>
                  </div>
                </div>
                {/* Prompts */}
                <div className="mb-4 py-4 px-4 bg-gray-800 rounded-md text-gray-300">
                  <div className="flex flex-row gap-5 items-start text-sm justify-between">
                    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gradient-to-r from-yellow-400 to-rose-500 rounded-md">
                      <span className="font-bold text-white">Z</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="font-medium">Lorem Ipsum</div>
                      <div className="font-mono">
                        SELECT column1, column2, ... <br />
                        FROM table_name;
                      </div>
                    </div>
                    <button>
                      <IoCopyOutline className="w-5 h-5"/>
                    </button>
                  </div>
                </div>
                {/* Prompts */}
                <div className="mb-4 py-4 px-4 bg-gray-800 rounded-md text-gray-300">
                  <div className="flex flex-row gap-5 items-start text-sm justify-between">
                    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gradient-to-r from-yellow-400 to-rose-500 rounded-md">
                      <span className="font-bold text-white">Z</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="font-medium">Lorem Ipsum</div>
                      <div className="font-mono">
                        SELECT column1, column2, ... <br />
                        FROM table_name;
                      </div>
                    </div>
                    <button>
                      <IoCopyOutline className="w-5 h-5"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="w-full max-w-screen flex justify-center">
            <div className="p-4 w-full max-w-lg">
              <div className="flex gap-2">
                <input className="p-4 text-gray-300 font-normal text-sm bg-gray-800 rounded-md overflow-y-auto w-full" placeholder={"Ask SQL query here"}/>
                <button className="p-4 bg-gradient-to-r from-yellow-400 to-rose-500 rounded-md">
                  <IoSendSharp className="text-bold"/>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}
