"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: true,
  toggleMute: () => {},
  playHover: () => {},
  playClick: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  // Load user preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("bb_sound_muted");
    if (saved !== null) {
      setIsMuted(saved === "true");
    }
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem("bb_sound_muted", String(next));
      
      // Initialize AudioContext on first user interaction unmute
      if (!next && !audioCtx && typeof window !== "undefined") {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          setAudioCtx(new AudioContextClass());
        }
      }
      return next;
    });
  };

  const getAudioContext = (): AudioContext | null => {
    if (typeof window === "undefined") return null;
    let ctx = audioCtx;
    if (!ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        ctx = new AudioContextClass();
        setAudioCtx(ctx);
      }
    }
    if (ctx && ctx.state === "suspended") {
      ctx.resume();
    }
    return ctx;
  };

  // Luxury synthesized soft chime for hover
  const playHover = () => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Fine-tuned frequency for high-end crystal chime sound (A5 / C6 harmonized)
    osc1.frequency.setValueAtTime(880, ctx.currentTime); // A5
    osc2.frequency.setValueAtTime(1046.5, ctx.currentTime); // C6

    osc1.type = "sine";
    osc2.type = "triangle";

    // Soft clickless envelope
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.02); // very low volume
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 0.4);
    osc2.stop(ctx.currentTime + 0.4);
  };

  // Luxury synthesized clean click/pluck for activation
  const playClick = () => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.frequency.setValueAtTime(440, ctx.currentTime); // A4 (lower frequency warm pluck)
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.15); // slides down slightly
    osc.type = "sine";

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
