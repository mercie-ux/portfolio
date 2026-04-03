import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../data/portfolio";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
    transition: "background 0.3s, border-bottom 0.3s",
  },
  logo: {
    fontFamily: "var(--font-heading)",
    fontWeight: 900,
    fontSize: 20,
    letterSpacing: "-0.5px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "var(--color-foreground)",
  },
  logoAccent: {
    display: "inline-block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "var(--color-accent)",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    listStyle: "none",
  },
  link: {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    padding: "8px 16px",
    border: "2px solid transparent",
    transition: "border-color 0.2s, background 0.2s",
    display: "block",
    color: "var(--color-foreground)",
  },
  cta: {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    padding: "8px 20px",
    background: "var(--color-accent)",
    color: "var(--color-white)",
    border: "var(--border)",
    boxShadow: "var(--shadow-sm)",
    transition: "transform 0.15s, box-shadow 0.15s",
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        ...styles.nav,
        background: scrolled ? "rgba(250,250,250,0.95)" : "transparent",
        borderBottom: scrolled ? "var(--border)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <a href="#" style={styles.logo}>
        <span style={styles.logoAccent} />
        {personal.name.split(" ")[0]}
        <span style={{ color: "var(--color-accent)" }}>
          {personal.name.split(" ")[1]}
        </span>
      </a>

      {/* Desktop */}
      <ul style={{ ...styles.links, display: "flex" }} className="desktop-nav">
        {navLinks.map((link) => (
          <li key={link.label}>
            <motion.a
              href={link.href}
              style={styles.link}
              whileHover={{
                borderColor: "var(--color-border)",
                background: "var(--color-muted)",
              }}
            >
              {link.label}
            </motion.a>
          </li>
        ))}
        <li>
          <motion.a
            href="#contact"
            style={styles.cta}
            whileHover={{ x: -3, y: -3, boxShadow: "var(--shadow-md)" }}
            whileTap={{ x: 0, y: 0, boxShadow: "none" }}
          >
            Hire Me
          </motion.a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "var(--border)",
          width: 44,
          height: 44,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 5,
          padding: 10,
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
        className="mobile-menu-btn"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--color-primary)",
            }}
            animate={
              menuOpen
                ? i === 0
                  ? { rotate: 45, y: 7 }
                  : i === 1
                  ? { opacity: 0 }
                  : { rotate: -45, y: -7 }
                : { rotate: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: 72,
              left: 0,
              right: 0,
              background: "var(--color-background)",
              borderBottom: "var(--border)",
              padding: "16px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  ...styles.link,
                  border: "var(--border)",
                  padding: "12px 16px",
                  textAlign: "center",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                ...styles.cta,
                textAlign: "center",
                display: "block",
              }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
