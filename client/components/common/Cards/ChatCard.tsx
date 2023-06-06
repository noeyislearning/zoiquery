import React from 'react'

/** Other Dependencies */
import { toast } from 'react-toastify';

/** React Icons */
import { IoCopyOutline } from "react-icons/io5";

/** Component */
import AIResponseAvatar from "@/components/common/Avatars/AIResponseAvatar";

/** Interfaces/Props */
import { MessageDisplayProps } from "@/assets/interfaces/message"

export default function ChatCard({ userMessages }: MessageDisplayProps) {

  /** Filter chat by role 'user' */
  const userMessagesFiltered = userMessages.filter((message) => message.role === "user");

  /** Filter chat by role 'assistant' */
  const assistantMessages = userMessages.filter((message) => message.role === "assistant");


  return (
    <>
      {userMessagesFiltered.map((userMessage, index) => {
        // Get the corresponding assistant's message
        const assistantMessage = assistantMessages[index];
        return (
          <div
              key={index}
              className="mb-4 py-4 px-4 bg-gray-800 rounded-md text-gray-300">
            <div className="flex flex-row gap-4 lg:gap-5 items-start text-sm justify-between">
              <AIResponseAvatar />
              <div className="flex flex-col gap-2 w-full">
                <div className="font-medium break-words">
                  {userMessage.content}
                </div>
                <div className="font-mono break-words">
                  {
                    assistantMessage && assistantMessage.content
                  }
                </div>
              </div>
              <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(assistantMessage.content);
                      toast.success('Copied to clipboard!');
                    } catch (err) {
                      toast.error('Failed to copy text!');
                      console.error('Could not copy text: ', err);
                    }
                  }}
                  className="text-gray-400 hover:text-gray-200"
              >
                <IoCopyOutline className="w-5 h-5"/>
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}
