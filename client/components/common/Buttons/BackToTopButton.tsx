"use client";
import React, { useState, useEffect } from 'react';

/** React Icons */
import { BsFillArrowUpCircleFill } from "react-icons/bs";

/** Other Dependencies */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BackToTopButton() {
  // Create a state to handle the visibility and progress of the button
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Listen to the scroll event and check if the user has scrolled the document more than 50
  useEffect(() => {
    const checkVisibilityAndScrollProgress = () => {
      toggleVisibility();
      updateScrollProgress();
    }
    document.addEventListener('scroll', checkVisibilityAndScrollProgress);
    return () => {
      document.removeEventListener('scroll', checkVisibilityAndScrollProgress);
    }
  }, []);

  // Function to set the visibility state of the button
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to update the scroll progress
  const updateScrollProgress = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    setScrollProgress(Number(scroll));
  };

  // Function to scroll to the top of the document
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Render the button with conditional rendering
  return (
    <>
      {isVisible &&
        <div onClick={scrollToTop} className="z-50 fixed bottom-20 right-5 text-gray-400 cursor-pointer flex justify-center items-center" style={{ width: '50px', height: '50px' }}>
            <CircularProgressbar value={scrollProgress * 100} styles={buildStyles({ pathColor: `rgba(168, 85, 247)`, trailColor: 'transparent' })}/>
            <BsFillArrowUpCircleFill className="w-11 h-11 absolute" />
        </div>
      }
    </>
  );
}
