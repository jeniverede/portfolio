export default function Resume() {
  const resumeUrl = "/Resume.pdf"; // Place your PDF in public folder

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        paddingTop: "5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <h1 style={{ color: "#682bd7", marginBottom: "2rem" }}>My Resume</h1>

      <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#333" }}>
        Scroll through the PDF below. Use the button to open in a new tab and download if needed.
      </p>

      {/* Responsive PDF iframe */}
      <div style={{ width: "100%", height: "100vh", border: "1px solid #ccc" }}>
        <iframe
          src={resumeUrl}
          title="Resume"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </div>

      {/* Download Button */}
      <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#682bd7",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4e1fa8")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#682bd7")}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
