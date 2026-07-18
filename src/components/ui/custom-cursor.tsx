"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "drag" | "view" | "book">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports touch or matches mobile media queries
    const checkDevice = () => {
      const mobile = 
        window.matchMedia("(max-width: 1024px)").matches || 
        ("ontouchstart" in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const updateCursorState = () => {
      const hoveredEl = document.querySelector(":hover") as HTMLElement | null;
      if (!hoveredEl) {
        setCursorType("default");
        return;
      }

      // Traversal to find custom cursor triggers
      let current: HTMLElement | null = hoveredEl;
      let detectedType: typeof cursorType = "default";

      while (current) {
        const dataCursor = current.getAttribute("data-cursor");
        if (dataCursor) {
          detectedType = dataCursor as any;
          break;
        }

        const tagName = current.tagName.toLowerCase();
        if (tagName === "a" || tagName === "button" || current.classList.contains("cursor-pointer")) {
          detectedType = "pointer";
          break;
        }
        current = current.parentElement;
      }

      setCursorType(detectedType);
    };

    // Listen globally to mouse events to update cursor hover state
    window.addEventListener("mouseover", updateCursorState);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", updateCursorState);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  // Custom Cursor Visual Render variants
  const ringVariants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: "transparent",
      borderColor: "rgba(197, 168, 106, 0.4)", // C5A86A
      borderWidth: 1,
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(197, 168, 106, 0.08)",
      borderColor: "rgba(197, 168, 106, 0.8)",
      borderWidth: 1.5,
    },
    drag: {
      width: 64,
      height: 64,
      backgroundColor: "#1E241B",
      borderColor: "#C5A86A",
      borderWidth: 1.5,
    },
    view: {
      width: 64,
      height: 64,
      backgroundColor: "#C5A86A",
      borderColor: "#FAF8F5",
      borderWidth: 1,
    },
    book: {
      width: 72,
      height: 72,
      backgroundColor: "#5C6B57",
      borderColor: "#C5A86A",
      borderWidth: 1.5,
    }
  };

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 select-none mix-blend-difference"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        variants={ringVariants}
        animate={cursorType}
        transition={{ type: "spring", stiffness: 350, damping: 35, mass: 0.2 }}
      >
        {/* Dynamic labels inside cursor */}
        {cursorType === "drag" && (
          <span className="text-[7px] text-[#C5A86A] tracking-[0.25em] font-sans font-bold uppercase select-none">
            DRAG
          </span>
        )}
        {cursorType === "view" && (
          <span className="text-[7px] text-white tracking-[0.25em] font-sans font-bold uppercase select-none">
            VIEW
          </span>
        )}
        {cursorType === "book" && (
          <span className="text-[7px] text-white tracking-[0.2em] font-sans font-bold uppercase select-none">
            BOOK
          </span>
        )}
      </motion.div>

      {/* Inner Pinpoint Dot (follows mouse raw x/y instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#C5A86A] rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: cursorType === "default" ? 1 : 0,
          opacity: cursorType === "default" ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};
