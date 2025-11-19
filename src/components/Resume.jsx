import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  const resumeUrl = "/Resume.pdf"; // PDF in public folder

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
      {/* Page Title */}
      <h1 style={{ color: "#682bd7", marginBottom: "2rem" }}>My Resume</h1>

      {/* Instruction */}
      <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#333" }}>
        Scroll through the PDF below. Use the button to open in a new tab and download if needed.
      </p>

      {/* PDF Viewer */}
      <div style={{ border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden" }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.12.313/build/pdf.worker.min.js`}>
          <Viewer fileUrl={resumeUrl} />
        </Worker>
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


