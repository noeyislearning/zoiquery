"use client";
import React from 'react'

/** Other Dependencies */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


/** React Icons */
import { IoSendSharp, IoCopyOutline } from "react-icons/io5";

/** Components */
import ChatCard from "@/components/common/Cards/ChatCard";

/** Interfaces/Props */
import { MessageProps } from "@/assets/interfaces/message"

export default function Home() {

  const [value, setValue] = React.useState<string>("");
  const [chat, setChat] = React.useState<MessageProps[]>([]);

  const getUserInput = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: value}),
    };

    toast.promise(
        fetch("http://localhost:8000/chat", options),
        {
          pending: 'Sending query...',
          success: 'Query sent successfully!',
          error: 'Failed to send query.'
        }
    ).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP ERROR, STATUS: ${response.status}`);
      }

      const data = await response.json();

      const userMessage = {
        role: "user",
        content: value,
      }
      setChat(oldChat => [...oldChat, data, userMessage])

      setValue("");
    }).catch((error) => {
      console.error(`SERVER ERROR: ${error}`);
    })
  }


  return (
    <>
      <section>
        <ToastContainer />
        <div className="pt-20 w-full max-w-screen flex justify-center">
          <div className="p-4 mx-auto h-[50vh] w-fit lg:w-[80vw] overflow-y-auto">
            <div className="flex flex-col justify-between">
              {chat.length > 0 ?
                <ChatCard userMessages={chat}/> :
                <div className="text-center">Looks empty, wanna try?</div>
              }
            </div>
          </div>
        </div>
        {/* Input */}
        <div className="pt-10 w-full max-w-screen flex justify-center">
          <div className="p-4 w-full max-w-lg">
            <div className="mb-4 text-xs text-center">This project is currently on a <span className="font-bold text-indigo-400">beta test</span>, it may produce inaccurate information.</div>
            <div className="flex gap-2">
              <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      void getUserInput();
                    }
                  }}
                  className="p-4 text-gray-300 font-normal text-sm bg-gray-800 rounded-md overflow-y-auto w-full" placeholder={"Ask SQL query here"}
              />
              <button
                  onClick={() => void getUserInput()}
                  className="p-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
              >
                <IoSendSharp className="text-bold"/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
