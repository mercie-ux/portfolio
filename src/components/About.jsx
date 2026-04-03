import { useRef } from "react";
import { motion, useInView } from "framer-motion"; // eslint-disable-line no-unused-vars
import { personal, skills } from "../data/portfolio";

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: 14,
            color: "var(--color-white)",
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: 13,
            color: skill.color,
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div
        style={{
          height: 12,
          background: "var(--color-muted)",
          border: "2px solid var(--color-border)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%",
            background: skill.color,
            position: "relative",
          }}
        >
          {/* Striped overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.15) 4px, rgba(255,255,255,0.15) 8px)",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "40+", label: "Projects Shipped" },
  { number: "12+", label: "Happy Clients" },
  { number: "3", label: "Open Source Libs" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--color-primary)",
        borderTop: "var(--border)",
        borderBottom: "var(--border)",
        padding: "120px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                border: "2px solid var(--color-accent)",
                padding: "6px 14px",
                display: "inline-block",
                marginBottom: 24,
              }}
            >
              About Me
            </div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "clamp(36px, 5vw, 64px)",
                letterSpacing: "-2px",
                lineHeight: 1,
                color: "var(--color-white)",
                marginBottom: 32,
              }}
            >
              Code meets
              <br />
              <span style={{ color: "var(--color-accent)" }}>Craft</span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 40,
              }}
            >
              {personal.bio}
            </p>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
                border: "var(--border)",
                borderColor: "rgba(255,255,255,0.15)",
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  style={{
                    padding: "24px",
                    borderRight: i % 2 === 0 ? "2px solid rgba(255,255,255,0.15)" : "none",
                    borderBottom: i < 2 ? "2px solid rgba(255,255,255,0.15)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 900,
                      fontSize: 48,
                      letterSpacing: "-2px",
                      lineHeight: 1,
                      color: "var(--color-accent)",
                      marginBottom: 4,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: 12,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 32,
              }}
            >
              Skills & Tools
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>

            {/* Open source note */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
                borderLeft: "3px solid var(--color-accent)",
                paddingLeft: 16,
                marginTop: 8,
              }}
            >
              I have contributed to several open source projects, collaborating with global developer communities and shipping meaningful improvements to production codebases.
            </motion.p>

            {/* Philosophy card */}
            <motion.div
              initial={{ opacity: 0, rotate: 2 }}
              whileInView={{ opacity: 1, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                marginTop: 48,
                padding: "24px",
                background: "var(--color-accent)",
                border: "2px solid rgba(255,255,255,0.3)",
                boxShadow: "6px 6px 0px rgba(255,255,255,0.1)",
                transform: "rotate(2deg)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: 18,
                  color: "var(--color-white)",
                  lineHeight: 1.4,
                  fontStyle: "italic",
                }}
              >
                "Good design is invisible. Great design makes you feel something."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
