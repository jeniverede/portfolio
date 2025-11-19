export default function Resume() {
  const resumeUrl = "/Resume.pdf"; // PDF in public folder

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        paddingTop: "5rem", // space from sticky header
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {/* Page Title */}
      <h1 style={{ color: "#682bd7", marginBottom: "1.5rem" }}>My Resume</h1>

      {/* Instructional text (optional) */}
      <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#333" }}>
        Scroll through the PDF below. Use the browser controls to download or print if needed.
      </p>

      {/* Responsive, scrollable PDF container */}
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 8rem)", // almost full viewport minus header
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <iframe
          src={resumeUrl}
          title="Resume"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
}



