export default function Resume() {
  const resumeUrl = "/Resume.pdf"; // PDF in public folder

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", paddingTop: "4rem", textAlign: "center" }}>
      <h1 style={{ color: "#682bd7", marginBottom: "1rem" }}> My Resume </h1>
      <p style={{ marginBottom: "1rem" }}>
        Scroll below to view or click download in the viewer menu.
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
    </div>
  );
}
