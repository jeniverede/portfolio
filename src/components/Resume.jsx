export default function Resume() {
  const resumeUrl = "/Resume.pdf";

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
      <h1 style={{ color: "#682bd7", marginBottom: "1.5rem" }}>My Resume</h1>

      <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#333" }}>
        Scroll through the PDF below. Use the browser controls to download or print if needed.
      </p>

      {/* Scrollable PDF container */}
      <div
        style={{
          width: "100%",
          height: "80vh", // or calc(100vh - 6rem)
          overflow: "auto",
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


