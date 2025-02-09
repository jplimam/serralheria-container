"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { JSX, useEffect, useRef } from "react";

interface IProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export default function Reveal({ children, width = "100%" }: Readonly<IProps>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        <div className="flex justify-center">{children}</div>
      </motion.div>
    </div>
  );
}
