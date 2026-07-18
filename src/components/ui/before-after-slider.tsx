"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "",
}) => {
  const [sliderPos, setSliderPos] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      data-cursor="drag"
      className={`relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-[#EFECE6] bg-[#E8E5DF] select-none cursor-ew-resize group shadow-premium ${className}`}
    >
      {/* Before Image (underneath) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeImage}
          alt="Before style transformation"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover pointer-events-none select-none"
        />
        <div className="absolute bottom-4 left-4 bg-[#1E241B]/70 backdrop-blur-md text-[#FAF8F5] text-[8px] font-sans font-bold tracking-[0.25em] px-3.5 py-1.5 rounded uppercase border border-white/5">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (clipped layer on top) */}
      <div
        className="absolute inset-0 h-full overflow-hidden select-none pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        {/* Width matches the container width exactly to align the top image */}
        <div className="absolute top-0 left-0 w-full h-full min-w-[280px] sm:min-w-[420px] md:min-w-[600px] lg:min-w-[420px] xl:min-w-[500px] aspect-[4/5]">
          <div className="relative w-full h-full">
            <Image
              src={afterImage}
              alt="After style transformation"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover pointer-events-none select-none"
            />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-[#C5A86A]/85 backdrop-blur-md text-[#FAF8F5] text-[8px] font-sans font-bold tracking-[0.25em] px-3.5 py-1.5 rounded uppercase border border-white/10">
          {afterLabel}
        </div>
      </div>

      {/* Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-[1.5px] bg-[#C5A86A] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Floating drag handle knob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1E241B] border border-[#C5A86A] text-[#C5A86A] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
          <ChevronLeft size={10} className="shrink-0 -mr-0.5" />
          <ChevronRight size={10} className="shrink-0 -ml-0.5" />
        </div>
      </div>
    </div>
  );
};
