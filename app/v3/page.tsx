"use client";

import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";

const FEATURES = [
  {
    icon: "📄",
    title: "Resume-Aware Questions",
    desc: "Upload your PDF and get questions tailored to your experience.",
  },
  {
    icon: "👁️",
    title: "Eye Contact Analysis",
    desc: "Real-time gaze tracking with MediaPipe.",
  },
  {
    icon: "🎙️",
    title: "Speech Confidence Score",
    desc: "Detect speaking pace and filler words.",
  },
];

const STATS = [
  { value: "6–8", label: "Questions per session" },
  { value: "100%", label: "Free to use" },
  { value: "40+", label: "Languages supported" },
  { value: "0₹", label: "No credit card" },
];

/* ----------------------------- FIXED HOOK ----------------------------- */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, inView] as const;
}

/* ----------------------- FIXED ANIMATED SECTION ----------------------- */

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0)"
          : "translateY(30px)",
        transition: `all 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------ COMPONENT ----------------------------- */

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const [heroVisible, setHeroVisible] =
    useState(false);

  const [typedText, setTypedText] = useState("");

  const fullText = "Ace your next interview.";

  /* -------------------------- HERO ANIMATION -------------------------- */

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeroVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  /* ---------------------------- TYPE EFFECT --------------------------- */

  useEffect(() => {
    if (!heroVisible) return;

    let i = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));

      i++;

      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [heroVisible]);

  /* ----------------------------- SCROLL ------------------------------- */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  /* ----------------------------- MOUSE ------------------------------- */

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      onMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        onMove
      );
    };
  }, []);

  return (
    <div style={styles.root}>
      <style>{css}</style>

      {/* CURSOR GLOW */}
      <div
        style={{
          ...styles.cursorGlow,
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* NAVBAR */}
      <nav
        style={{
          ...styles.nav,
          ...(scrolled
            ? styles.navScrolled
            : {}),
        }}
      >
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoDot}>
              ●
            </span>
            PrepWise
          </div>

          <div style={styles.navLinks}>
            <a
              href="#features"
              style={styles.navLink}
            >
              Features
            </a>

            <a
              href="#signup"
              style={styles.navCta}
            >
              Start Free →
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div
            style={{
              ...styles.heroBadge,
              opacity: heroVisible ? 1 : 0,
            }}
          >
            AI-powered · Free forever
          </div>

          <h1
            style={{
              ...styles.heroTitle,
              opacity: heroVisible ? 1 : 0,
            }}
          >
            {typedText}
            <span style={styles.cursor}>|</span>

            <br />

            <span
              style={styles.heroTitleSub}
            >
              With AI by your side.
            </span>
          </h1>

          <p style={styles.heroDesc}>
            Upload your resume. Practice
            interviews. Improve confidence.
          </p>

          <div style={styles.heroCtas}>
            <a
              href="#signup"
              style={styles.ctaPrimary}
            >
              Start practicing free
            </a>

            <a
              href="#features"
              style={styles.ctaSecondary}
            >
              See features ↓
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {STATS.map((s, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
            >
              <div style={styles.statCard}>
                <div style={styles.statVal}>
                  {s.value}
                </div>

                <div style={styles.statLabel}>
                  {s.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        style={styles.section}
      >
        <AnimatedSection>
          <h2 style={styles.sectionTitle}>
            Everything you need
          </h2>
        </AnimatedSection>

        <div style={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
            >
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  {f.icon}
                </div>

                <h3
                  style={styles.featureTitle}
                >
                  {f.title}
                </h3>

                <p style={styles.featureDesc}>
                  {f.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="signup"
        style={styles.ctaSection}
      >
        <AnimatedSection>
          <h2 style={styles.ctaTitle}>
            Start free today.
          </h2>

          <p style={styles.ctaDesc}>
            No credit card required.
          </p>

          <button style={styles.ctaButton}>
            Get Started →
          </button>
        </AnimatedSection>
      </section>
    </div>
  );
}

/* ------------------------------- STYLES ------------------------------ */

const styles: any = {
  root: {
    background: "#080B0F",
    color: "#E8EDF2",
    minHeight: "100vh",
    fontFamily:
      "'DM Sans', sans-serif",
    overflowX: "hidden",
  },

  cursorGlow: {
    position: "fixed",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(78,205,196,0.08), transparent 70%)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: "20px 0",
    transition: "all 0.3s ease",
  },

  navScrolled: {
    backdropFilter: "blur(20px)",
    background:
      "rgba(8,11,15,0.8)",
  },

  navInner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 22,
    fontWeight: 700,
    display: "flex",
    gap: 8,
  },

  logoDot: {
    color: "#4ECDC4",
  },

  navLinks: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },

  navLink: {
    color: "#ccc",
    textDecoration: "none",
  },

  navCta: {
    background: "#4ECDC4",
    color: "#000",
    padding: "10px 18px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 700,
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "120px 32px",
    textAlign: "center",
  },

  heroContent: {
    maxWidth: 900,
  },

  heroBadge: {
    color: "#4ECDC4",
    marginBottom: 20,
  },

  heroTitle: {
    fontSize:
      "clamp(42px, 7vw, 82px)",
    fontWeight: 800,
    lineHeight: 1.1,
  },

  heroTitleSub: {
    color: "#4ECDC4",
  },

  cursor: {
    animation: "blink 1s infinite",
  },

  heroDesc: {
    marginTop: 24,
    color: "rgba(255,255,255,0.6)",
    fontSize: 18,
    lineHeight: 1.7,
  },

  heroCtas: {
    marginTop: 40,
    display: "flex",
    gap: 16,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  ctaPrimary: {
    background: "#4ECDC4",
    color: "#000",
    padding: "14px 28px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 700,
  },

  ctaSecondary: {
    border:
      "1px solid rgba(255,255,255,0.15)",
    padding: "14px 28px",
    borderRadius: 10,
    textDecoration: "none",
    color: "#fff",
  },

  statsSection: {
    padding: "60px 32px",
  },

  statsGrid: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
  },

  statCard: {
    padding: 24,
    background:
      "rgba(255,255,255,0.03)",
    borderRadius: 12,
    textAlign: "center",
  },

  statVal: {
    fontSize: 42,
    fontWeight: 800,
    color: "#4ECDC4",
  },

  statLabel: {
    color: "rgba(255,255,255,0.5)",
  },

  section: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "100px 32px",
  },

  sectionTitle: {
    fontSize: 48,
    marginBottom: 50,
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },

  featureCard: {
    background:
      "rgba(255,255,255,0.03)",
    border:
      "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: 28,
  },

  featureIcon: {
    fontSize: 30,
    marginBottom: 18,
  },

  featureTitle: {
    fontSize: 20,
    marginBottom: 10,
  },

  featureDesc: {
    color: "rgba(255,255,255,0.6)",
    lineHeight: 1.7,
  },

  ctaSection: {
    textAlign: "center",
    padding: "120px 32px",
  },

  ctaTitle: {
    fontSize: 52,
    marginBottom: 20,
  },

  ctaDesc: {
    color: "rgba(255,255,255,0.5)",
    marginBottom: 30,
  },

  ctaButton: {
    background: "#4ECDC4",
    color: "#000",
    padding: "16px 30px",
    borderRadius: 12,
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  },
};

const css = `
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background:#080B0F;
}

@keyframes blink{
  0%,100%{opacity:1}
  50%{opacity:0}
}
`;
