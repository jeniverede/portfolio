import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const resumeUrl = "/Resume.pdf"; // PDF in public folder
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
      <div style={{ width: "100%", overflowY: "auto" }}>
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={Math.min(900, window.innerWidth - 32)} // responsive
              renderTextLayer={true}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
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

