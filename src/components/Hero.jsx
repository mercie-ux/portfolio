import { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowDown, Zap, Download } from "lucide-react";
import { personal } from "../data/portfolio";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const lineVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const roles = ["Software Developer", "React Developer", "MERN Stack Dev", "Next.js Engineer", "Playwright / E2E Tester"];

export default function Hero() {
  const containerRef = useRef(null);
  useScroll({ target: containerRef });

  const tickerRef = useRef(null);

  useEffect(() => {
    let pos = 0;
    const speed = 0.4;
    let raf;

    const animate = () => {
      pos -= speed;
      if (tickerRef.current) {
        const w = tickerRef.current.scrollWidth / 2;
        if (Math.abs(pos) >= w) pos = 0;
        tickerRef.current.style.transform = `translateX(${pos}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        background: "var(--color-background)",
        borderBottom: "var(--border)",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--color-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-muted) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -4 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
        style={{
          position: "absolute",
          top: 140,
          right: "8%",
          background: "var(--color-accent)",
          color: "white",
          padding: "10px 18px",
          border: "var(--border)",
          boxShadow: "var(--shadow-md)",
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: 13,
          letterSpacing: "1px",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: 8,
          transform: "rotate(-4deg)",
          zIndex: 2,
        }}
      >
        <Zap size={14} fill="white" />
        {personal.available ? "Open to Work" : "Not Available"}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 48,
              height: 3,
              background: "var(--color-accent)",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
            }}
          >
            {personal.role}
          </span>
        </motion.div>

        {/* Main heading */}
        <div style={{ overflow: "hidden", marginBottom: 8 }}>
          <motion.h1
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(56px, 10vw, 140px)",
              letterSpacing: "-4px",
              lineHeight: 0.9,
              color: "var(--color-foreground)",
            }}
          >
            {personal.name.split(" ")[0]}
          </motion.h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              variants={lineVariants}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "clamp(56px, 10vw, 140px)",
                letterSpacing: "-4px",
                lineHeight: 0.9,
                color: "var(--color-accent)",
              }}
            >
              {personal.name.split(" ")[1]}
            </motion.h1>
          </div>

          {/* Inline accent box */}
          <motion.div
            variants={fadeUp}
            style={{
              background: "var(--color-primary)",
              padding: "16px 24px",
              marginBottom: 8,
              border: "var(--border)",
              boxShadow: "4px 4px 0px var(--color-accent)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "clamp(13px, 1.5vw, 16px)",
                color: "var(--color-white)",
                maxWidth: 260,
                lineHeight: 1.5,
              }}
            >
              {personal.tagline}
            </p>
          </motion.div>
        </div>

        {/* CTA row */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="#projects"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "16px 32px",
              background: "var(--color-primary)",
              color: "var(--color-white)",
              border: "var(--border)",
              boxShadow: "var(--shadow-md)",
              display: "inline-block",
            }}
            whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0px var(--color-primary)" }}
            whileTap={{ x: 0, y: 0, boxShadow: "none" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "16px 32px",
              background: "transparent",
              color: "var(--color-foreground)",
              border: "var(--border)",
              boxShadow: "var(--shadow-md)",
              display: "inline-block",
            }}
            whileHover={{
              x: -4,
              y: -4,
              boxShadow: "10px 10px 0px var(--color-accent)",
              background: "var(--color-accent)",
              color: "var(--color-white)",
            }}
            whileTap={{ x: 0, y: 0, boxShadow: "none" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="/Mercy-Njeri-Mbao-CV.pdf"
            download="Mercy-Njeri-Mbao-CV.pdf"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "16px 32px",
              background: "var(--color-accent)",
              color: "var(--color-white)",
              border: "var(--border)",
              boxShadow: "var(--shadow-md)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0px var(--color-primary)" }}
            whileTap={{ x: 0, y: 0, boxShadow: "none" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Download size={16} />
            Download CV
          </motion.a>

          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "var(--color-secondary)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22C55E",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            {personal.location}
          </span>
        </motion.div>
      </motion.div>

      {/* Scrolling ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "var(--border)",
          background: "var(--color-primary)",
          padding: "14px 0",
          overflow: "hidden",
        }}
      >
        <div
          ref={tickerRef}
          style={{
            display: "flex",
            gap: 48,
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {[...roles, ...roles, ...roles, ...roles].map((role, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: i % 2 === 0 ? "var(--color-white)" : "var(--color-accent)",
                display: "flex",
                alignItems: "center",
                gap: 48,
              }}
            >
              {role}
              <span style={{ color: "var(--color-accent)", opacity: 0.6 }}>✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: 80,
          right: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} style={{ color: "var(--color-secondary)" }} />
        </motion.div>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--color-secondary)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
