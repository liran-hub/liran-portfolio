// src/app/page.tsx
import type React from "react";


export default function Home() {
  /* ---------- Shared Styles ---------- */

  const pageStyle: React.CSSProperties = {
    maxWidth: 900,
    margin: "0 auto",
    padding: "48px 20px",
    lineHeight: 1.65,
    color: "#e5e7eb",
  };

  const cardStyle: React.CSSProperties = {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: 14,
    padding: 40,
    marginBottom: 32,
  };

  const linkStyle: React.CSSProperties = {
    color: "#cbd5f5",
  };

  /* ---------- Premium Bullets ---------- */

  const bulletItem: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  };

  const bulletDot: React.CSSProperties = {
    marginTop: 8,
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#cbd5f5",
    flexShrink: 0,
  };

  return (
    <main style={pageStyle}>
      {/* ---------- Top Navigation ---------- */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "#020617",
          padding: "14px 0",
          borderBottom: "1px solid #1e293b",
          zIndex: 10,
        }}
      >
        <nav style={{ display: "flex", gap: 28, justifyContent: "center" }}>
          <a style={linkStyle} href="#about">About</a>
          <a style={linkStyle} href="#technion">Why the Technion?</a>
          <a style={linkStyle} href="#cv">CV Snapshot</a>
          <a style={linkStyle} href="#contact">Contact</a>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section style={{ padding: "56px 0 40px" }}>
        <h1 style={{ fontSize: 52, margin: "0 0 10px" }}>
          Liran Vulikh
        </h1>
        <p style={{ fontSize: 18, color: "#cbd5f5", margin: 0 }}>
          Aspiring Computer Science student — focused on rigorous learning,
          systems thinking, and long-term growth.
        </p>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" style={cardStyle}>
        <h2 style={{ fontSize: 28, marginBottom: 20 }}>About</h2>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            I have always been drawn to programming and analytical thinking.
            In high school, I expanded my studies in Computer Science alongside
            advanced Mathematics and Physics.
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            My service in Unit 8200 broadened my perspective on what technology
            can enable and how deeply it can affect complex systems.
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            I developed a strong habit of independent learning by defining
            objectives, mapping paths forward, and executing structured plans
            with clear milestones.
          </span>
        </div>
      </section>

      {/* ---------- Why Technion? ---------- */}
      <section id="technion" style={cardStyle}>
        <h2 style={{ fontSize: 28, marginBottom: 20 }}>
          Why Technion?
        </h2>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            The Technion represents the highest standard of scientific and
            engineering education in Israel, emphasizing depth, rigor, and
            intellectual discipline.
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Beyond academics, it offers a unique intellectual community where
            highly capable individuals challenge one another and grow together.
          </span>
        </div>
      </section>

      {/* ---------- CV Snapshot ---------- */}
      <section id="cv" style={cardStyle}>
        <h2 style={{ fontSize: 28, marginBottom: 20 }}>CV Snapshot</h2>

        {/* SYNDESIO */}
        <h3>SYNDESIO (2025–2026)</h3>
        <p style={{ color: "#cbd5f5", marginTop: 4 }}>
          <strong>Intelligence Analyst — Dark Web & Cybercrime Research</strong>
        </p>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Specialized in research across dark web ecosystems, cybercrime
            forums, and cryptocurrency-related platforms.
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Conducted open-source and covert intelligence collection within
            underground communities.
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Produced structured analytical reports by synthesizing technical
            findings, open-source data, and observed patterns.
          </span>
        </div>

        {/* Unit 8200 */}
        <h3 style={{ marginTop: 28 }}>Unit 8200, IDF (2021–2024)</h3>
        <p style={{ color: "#cbd5f5", marginTop: 4 }}>
          <strong>Intelligence Analyst → Team Leader</strong>
        </p>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Completed intensive professional training in signals intelligence.
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Promoted to team leader within one year, leading a team of analysts
            in a critical mission.
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Led organizational process improvements to enhance operational
            efficiency.
          </span>
        </div>

        {/* Education */}
        <h3 style={{ marginTop: 28 }}>
          Education — Ort Bialik High School (2018–2021)
        </h3>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>Mathematics (5 units) — <strong>100</strong></span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>Physics (5 units) — <strong>99</strong></span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Computer Science (10 units) — <strong>99</strong> (5 units) +{" "}
            <strong>93</strong> (5 units)
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>English (5 units) — <strong>92</strong></span>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" style={{ ...cardStyle, marginBottom: 0 }}>
        <h2 style={{ fontSize: 28, marginBottom: 20 }}>Contact</h2>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            Email:{" "}
            <a style={linkStyle} href="mailto:liranvil03@gmail.com">
              liranvil03@gmail.com
            </a>
          </span>
        </div>

        <div style={bulletItem}>
          <span style={bulletDot} />
          <span>
            LinkedIn:{" "}
            <a
              style={linkStyle}
              href="https://www.linkedin.com/in/LiranVulikh"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/LiranVulikh
            </a>
          </span>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer style={{ padding: "28px 0 0", color: "#94a3b8" }}>
        <p style={{ margin: 0, fontSize: 14 }}>
          © {new Date().getFullYear()} Liran Vulikh
        </p>
      </footer>
    </main>
  );
}
