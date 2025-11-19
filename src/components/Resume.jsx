export default function Resume() {
  const resumeUrl = "/Resume.pdf"; // PDF in public folder

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", paddingTop: "4rem", textAlign: "center" }}>
      <h1>My Resume</h1>
      <p style={{ marginBottom: "1rem" }}>
        Scroll below to view or click download to open in a new tab.
      </p>

      {/* Responsive PDF Embed */}
      <div style={{ position: "relative", paddingBottom: "141%", height: 0, overflow: "hidden" }}>
        <iframe
          src={resumeUrl}
          title="Resume"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "1px solid #ccc",
          }}
        ></iframe>
      </div>

      {/* Download Button */}
      <div style={{ marginTop: "1.5rem", marginBottom: "3rem" }}>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--clr-accent)",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#531fb0")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#682bd7")}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
