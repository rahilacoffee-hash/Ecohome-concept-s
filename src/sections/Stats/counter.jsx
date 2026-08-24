import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MotionCounter({ value }) {
  const ref = useRef(null);

  const count = useMotionValue(0);

  const [display, setDisplay] = useState(0);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [started, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}