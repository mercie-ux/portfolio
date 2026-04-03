import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { personal, socials } from "../data/portfolio";

function InputField({ label, type = "text", name, placeholder, multiline = false }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label
        htmlFor={name}
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "var(--color-secondary)",
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={5}
          required
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            padding: "14px 16px",
            background: "var(--color-background)",
            border: "var(--border)",
            color: "var(--color-foreground)",
            resize: "vertical",
            outline: "none",
            transition: "box-shadow 0.2s",
            lineHeight: 1.6,
          }}
          onFocus={(e) => (e.target.style.boxShadow = "4px 4px 0px var(--color-accent)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          required
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            padding: "14px 16px",
            background: "var(--color-background)",
            border: "var(--border)",
            color: "var(--color-foreground)",
            outline: "none",
            transition: "box-shadow 0.2s",
            width: "100%",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "4px 4px 0px var(--color-accent)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      });

      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px",
        borderTop: "var(--border)",
        background: "var(--color-background)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 80 }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--color-secondary)",
              border: "2px solid var(--color-border)",
              padding: "6px 14px",
              display: "inline-block",
              marginBottom: 24,
              background: "var(--color-muted)",
            }}
          >
            Contact
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "clamp(40px, 6vw, 80px)",
                letterSpacing: "-3px",
                lineHeight: 0.95,
                color: "var(--color-foreground)",
              }}
            >
              Let's Build
              <br />
              <span style={{ color: "var(--color-accent)" }}>Something</span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--color-secondary)",
                maxWidth: 360,
                lineHeight: 1.65,
              }}
            >
              Have a project in mind? I'm always open to discussing new opportunities, collaborations, or just chatting about cool ideas.
            </p>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 48,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            {/* Direct email */}
            <div
              style={{
                background: "var(--color-primary)",
                border: "var(--border)",
                boxShadow: "var(--shadow-lg)",
                padding: "32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <Mail size={18} style={{ color: "var(--color-accent)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  Direct Email
                </span>
              </div>
              <a
                href={`mailto:${personal.email}`}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: 18,
                  color: "var(--color-accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                }}
              >
                {personal.email}
              </a>
            </div>

            {/* Phone */}
            <div
              style={{
                padding: "24px",
                border: "var(--border)",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--color-muted)",
                  border: "var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--color-secondary)",
                    marginBottom: 4,
                  }}
                >
                  Phone
                </div>
                <a
                  href={`tel:${personal.phone}`}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--color-foreground)",
                  }}
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div
              style={{
                padding: "24px",
                border: "var(--border)",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--color-muted)",
                  border: "var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--color-secondary)",
                    marginBottom: 4,
                  }}
                >
                  Based
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--color-foreground)",
                  }}
                >
                  {personal.location}
                </div>
              </div>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--color-secondary)",
                  marginBottom: 4,
                }}
              >
                Find Me Online
              </div>
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: -4, y: -4, boxShadow: "6px 6px 0px var(--color-accent)" }}
                  whileTap={{ x: 0, y: 0, boxShadow: "none" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 20px",
                    border: "var(--border)",
                    boxShadow: "var(--shadow-sm)",
                    background: "var(--color-background)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "var(--color-foreground)",
                  }}
                >
                  <span>{social.name}</span>
                  <span style={{ color: "var(--color-secondary)", fontSize: 12 }}>
                    {social.handle}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                border: "var(--border)",
                boxShadow: "var(--shadow-lg)",
                padding: "40px",
                background: "var(--color-white)",
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 20,
                      padding: "60px 0",
                      textAlign: "center",
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <CheckCircle
                        size={64}
                        style={{ color: "var(--color-accent)" }}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 900,
                        fontSize: 28,
                        letterSpacing: "-1px",
                        color: "var(--color-foreground)",
                      }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        color: "var(--color-secondary)",
                        lineHeight: 1.6,
                        maxWidth: 280,
                      }}
                    >
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: 24 }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                      }}
                    >
                      <InputField label="Name" name="name" placeholder="Your Name" />
                      <InputField label="Email" type="email" name="email" placeholder="you@email.com" />
                    </div>
                    <InputField label="Subject" name="subject" placeholder="What's this about?" />
                    <InputField label="Message" name="message" placeholder="Tell me about your project..." multiline />

                    {error && (
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          color: "var(--color-destructive)",
                          border: "2px solid var(--color-destructive)",
                          padding: "10px 14px",
                          background: "rgba(220,38,38,0.05)",
                        }}
                      >
                        {error}
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0px var(--color-primary)" }}
                      whileTap={{ x: 0, y: 0, boxShadow: "none" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        fontSize: 15,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        padding: "18px 32px",
                        background: loading ? "var(--color-secondary)" : "var(--color-accent)",
                        color: "var(--color-white)",
                        border: "var(--border)",
                        boxShadow: "6px 6px 0px var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        transition: "background 0.2s",
                      }}
                    >
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            style={{ display: "inline-block", width: 18, height: 18 }}
                          >
                            ⟳
                          </motion.span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .contact-grid form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
