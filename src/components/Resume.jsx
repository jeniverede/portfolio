export default function Resume() {
  // Add all your PDF page images here
  const pages = [
    "/Resume_1.jpg",
    "/Resume_2.jpg",
    // Add more pages as needed
  ];

  const resumePdf = "/Resume.pdf"; // Original PDF for download

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        paddingTop: "5rem", // space from header
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {/* Page Title */}
      <h1 style={{ color: "#682bd7", marginBottom: "2rem" }}>My Resume</h1>

      {/* Instructions */}
      <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#333" }}>
        Scroll through the resume below. Use the download button at the bottom to open in a new tab and download if needed.
      </p>

      {/* Render each page image */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {pages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Resume page ${index + 1}`}
            style={{ width: "100%", height: "auto", border: "1px solid #ccc", borderRadius: "5px" }}
          />
        ))}
      </div>

      {/* Download Button */}
      <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
        <a
          href={resumePdf}
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

