import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"; // eslint-disable-line no-unused-vars

export default function Cursor() {
  // Initialise directly — avoids calling setState inside an effect body
  const [isTouch, setIsTouch] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = (e) => setIsTouch(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(useTransform(mouseX, (x) => x - 8), { stiffness: 600, damping: 40 });
  const dotY = useSpring(useTransform(mouseY, (y) => y - 8), { stiffness: 600, damping: 40 });

  const ringX = useSpring(useTransform(mouseX, (x) => x - 20), { stiffness: 200, damping: 28 });
  const ringY = useSpring(useTransform(mouseY, (y) => y - 20), { stiffness: 200, damping: 28 });

  const ringScale = useMotionValue(1);
  const ringScaleSpring = useSpring(ringScale, { stiffness: 300, damping: 25 });
  const ringRef = useRef(null);
  const visible = useMotionValue(0);

  useEffect(() => {
    if (isTouch) return;

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      visible.set(1);
    };

    const onEnter = () => {
      ringScale.set(2.2);
      if (ringRef.current) {
        ringRef.current.style.borderColor = "var(--color-accent)";
        ringRef.current.style.background = "rgba(236,72,153,0.08)";
      }
    };
    const onLeave = () => {
      ringScale.set(1);
      if (ringRef.current) {
        ringRef.current.style.borderColor = "var(--color-primary)";
        ringRef.current.style.background = "transparent";
      }
    };

    const attach = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isTouch, mouseX, mouseY, ringScale, visible]);

  // Don't render anything on touch/mobile devices
  if (isTouch) return null;

  return (
    <>
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          opacity: visible,
          position: "fixed",
          top: 0,
          left: 0,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "var(--color-accent)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "multiply",
        }}
      />
      <motion.div
        ref={ringRef}
        style={{
          x: ringX,
          y: ringY,
          scale: ringScaleSpring,
          opacity: visible,
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid var(--color-primary)",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "border-color 0.2s ease, background 0.2s ease",
        }}
      />
    </>
  );
}
