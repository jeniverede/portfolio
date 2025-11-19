import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Local PDF.js worker (Netlify-safe)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  const resumeUrl = "/Resume.pdf"; // Place your PDF in public folder
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(900);

  // Responsive width
  useEffect(() => {
    const handleResize = () => {
      setPageWidth(Math.min(900, window.innerWidth - 32));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <h1 style={{ color: "#682bd7", marginBottom: "2rem" }}>My Resume</h1>

      <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#333" }}>
        Scroll through the PDF below. Use the button to open in a new tab and download if needed.
      </p>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              renderTextLayer={true}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>

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



