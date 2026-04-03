import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-foreground)",
        borderTop: "var(--border)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: 24,
            letterSpacing: "-1px",
            color: "var(--color-white)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "var(--color-accent)",
            }}
          />
          {personal.name}
        </div>

        {/* Center */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.5px",
          }}
        >
          Built with React + Framer Motion · {year}
        </p>

        {/* CTA */}
        <motion.a
          href="#home"
          whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px var(--color-accent)" }}
          whileTap={{ x: 0, y: 0, boxShadow: "none" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "10px 20px",
            background: "transparent",
            color: "var(--color-white)",
            border: "2px solid rgba(255,255,255,0.2)",
            boxShadow: "4px 4px 0px rgba(255,255,255,0.1)",
            display: "inline-block",
          }}
        >
          Back to Top ↑
        </motion.a>
      </div>
    </footer>
  );
}
