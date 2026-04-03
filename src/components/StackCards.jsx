import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, ExternalLink, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Each card sticks at this offset + (index * peek) so earlier cards peek under the active one
const STICKY_TOP = 80;
const PEEK = 12;

function StackCard({ project, index, total }) {
  return (
    <article
      className="stack-card"
      style={{
        background: "var(--color-white)",
        border: "3px solid var(--color-border)",
        boxShadow: `6px 6px 0px ${project.color}`,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
        transformOrigin: "top center",
        willChange: "transform",
        minHeight: 340,
      }}
    >
      {/* ── Left colour panel ── */}
      <div
        style={{
          background: project.color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "32px 28px",
          borderRight: "3px solid var(--color-border)",
          position: "relative",
        }}
      >
        {/* Ghost number */}
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: 80,
            lineHeight: 1,
            color: "rgba(0,0,0,0.07)",
            position: "absolute",
            top: 12,
            right: 16,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={badgeStyle("rgba(0,0,0,0.15)", "#fff")}>
              {project.year}
            </span>
            <span style={badgeStyle("rgba(255,255,255,0.25)", project.accent)}>
              {project.category}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(22px, 3vw, 36px)",
              letterSpacing: "-1px",
              lineHeight: 1.05,
              color: project.accent,
              marginBottom: 16,
            }}
          >
            {project.title}
          </h3>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  background: "rgba(0,0,0,0.12)",
                  color: project.accent,
                  border: "1px solid rgba(0,0,0,0.15)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              alignSelf: "flex-start",
              width: 48,
              height: 48,
              background: project.accent,
              border: "2px solid rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
              transition: "transform 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(45deg)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
          >
            <ArrowUpRight size={22} style={{ color: project.color }} />
          </a>
        )}
      </div>

      {/* ── Right description panel ── */}
      <div
        style={{
          padding: "32px 28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "var(--color-white)",
        }}
      >
        {/* Progress dots */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              style={{
                display: "block",
                height: 3,
                flex: i === index ? "2 1 0" : "1 1 0",
                background: i === index ? "var(--color-accent)" : "var(--color-muted)",
                border: "1px solid var(--color-border)",
              }}
            />
          ))}
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
              marginBottom: 12,
            }}
          >
            About this project
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.75,
              color: "var(--color-secondary)",
            }}
          >
            {project.description}
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={linkStyle("var(--color-foreground)", "var(--color-background)", "var(--color-border)")}
              onMouseEnter={linkHoverIn}
              onMouseLeave={linkHoverOut}
            >
              <Code2 size={14} />
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={linkStyle("var(--color-white)", "var(--color-accent)", "var(--color-primary)")}
              onMouseEnter={linkHoverIn}
              onMouseLeave={linkHoverOut}
            >
              <ExternalLink size={14} />
              Live Site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function badgeStyle(bg, color) {
  return {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 10,
    letterSpacing: "2px",
    textTransform: "uppercase",
    padding: "4px 10px",
    background: bg,
    color,
    border: "2px solid rgba(0,0,0,0.2)",
  };
}

function linkStyle(color, background, shadowColor) {
  return {
    display: "flex",
    alignItems: "center",
    gap: 7,
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "1px",
    textTransform: "uppercase",
    padding: "10px 18px",
    border: "var(--border)",
    color,
    background,
    boxShadow: `3px 3px 0px ${shadowColor}`,
    transition: "transform 0.15s, box-shadow 0.15s",
  };
}

function linkHoverIn(e) {
  e.currentTarget.style.transform = "translate(-2px,-2px)";
  e.currentTarget.style.boxShadow = e.currentTarget.style.boxShadow.replace("3px 3px", "5px 5px");
}
function linkHoverOut(e) {
  e.currentTarget.style.transform = "translate(0,0)";
  e.currentTarget.style.boxShadow = e.currentTarget.style.boxShadow.replace("5px 5px", "3px 3px");
}

// ── Main component ────────────────────────────────────────────────────────────

export default function StackCards({ projects }) {
  const trackRef = useRef(null);
  // One ref per sticky wrapper (the element that scrolls and sticks)
  const wrapRefs = useRef([]);
  // One ref per article (the element we scale down)
  const articleRefs = useRef([]);

  useEffect(() => {
    const wraps = wrapRefs.current;
    const articles = articleRefs.current;

    const ctx = gsap.context(() => {
      projects.forEach((_, i) => {
        if (!wraps[i] || !articles[i]) return;

        // ── Scale-down animation ──────────────────────────────────────────────
        // When card [i+1] enters the viewport the card underneath ([i]) shrinks
        // and darkens so it looks buried in the stack.
        if (i < projects.length - 1 && wraps[i + 1]) {
          gsap.to(articles[i], {
            scale: 1 - (projects.length - i) * 0.04,
            filter: "brightness(0.75)",
            ease: "none",
            scrollTrigger: {
              trigger: wraps[i + 1],   // next card entering drives the tween
              start: "top 80%",         // start scaling when the next card is 80% down
              end: "top top",           // finish by the time next card hits the top
              scrub: 0.4,               // smooth scrub tied to scroll position
            },
          });
        }

        // ── Slide-in animation ────────────────────────────────────────────────
        // Each card slides up from below the first time it enters the viewport.
        gsap.fromTo(
          articles[i],
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wraps[i],
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, trackRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <div className="sc-section">
      {/* ── Heading ── */}
      <div className="sc-label">
        <span className="sc-eyebrow">Selected Work</span>
        <div className="sc-heading-row">
          <h2 className="sc-heading">
            Things I've{" "}
            <span style={{ color: "var(--color-accent)" }}>Built</span>
          </h2>
          <p className="sc-sub">
            Scroll through a curated selection — from AI tools to shipped
            products with real users.
          </p>
        </div>
      </div>

      {/* ── Stack track ── */}
      <div ref={trackRef} className="sc-track">
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (wrapRefs.current[i] = el)}
            className="sc-wrap"
            style={{
              position: "sticky",
              // Each card sticks a little lower so earlier ones peek out above
              top: STICKY_TOP + i * PEEK,
              zIndex: i + 1,
              // Give each item enough scroll height so the scrub has room to play
              marginBottom: i < projects.length - 1 ? "30vh" : 0,
            }}
          >
            <div ref={(el) => (articleRefs.current[i] = el)}>
              <StackCard project={project} index={i} total={projects.length} />
            </div>
          </div>
        ))}

        {/* Spacer — lets the last card clear the viewport */}
        <div style={{ height: "50vh" }} />
      </div>

      <style>{`
        .sc-section {
          padding: 80px 20px 0;
          max-width: 1100px;
          margin: 0 auto;
        }

        .sc-label { margin-bottom: 64px; }

        .sc-eyebrow {
          display: inline-block;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-secondary);
          border: 2px solid var(--color-border);
          padding: 6px 14px;
          background: var(--color-muted);
          margin-bottom: 20px;
        }

        .sc-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 20px;
        }

        .sc-heading {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(36px, 6vw, 80px);
          letter-spacing: -2px;
          line-height: 0.95;
          color: var(--color-foreground);
          margin: 0;
        }

        .sc-sub {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-secondary);
          max-width: 340px;
          line-height: 1.65;
          margin: 0;
        }

        .sc-track { position: relative; }

        .sc-wrap { padding-bottom: 0; }

        /* ── Responsive ── */

        @media (max-width: 768px) {
          .sc-section { padding-inline: 16px; }

          .sc-heading-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .stack-card {
            grid-template-columns: 1fr !important;
          }

          .stack-card > div:first-child {
            border-right: none !important;
            border-bottom: 3px solid var(--color-border);
          }
        }

        @media (max-width: 480px) {
          .sc-section { padding-inline: 12px; }

          .stack-card > div:first-child {
            padding: 20px 16px !important;
          }

          .stack-card > div:last-child {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
