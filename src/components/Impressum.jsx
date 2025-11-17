
export default function Impressum() {
  const headingStyle = { fontSize: "34px", fontWeight: "bold", marginTop: "2rem" };
  const subHeadingStyle = { fontSize: "24px", fontWeight: "bold", marginTop: "1.5rem" };
  const paragraphStyle = { margin: "0.5rem 0", lineHeight: "1.6" };

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "Poppins, sans-serif" }}>
      <h1 style={headingStyle}>Impressum / Legal Notice</h1>

      {/* 1. Anbieter / Provider */}
      <h2 style={subHeadingStyle}>1. Anbieter / Provider</h2>
      <p style={paragraphStyle}>
        <strong>Jennifer Rothrock</strong><br />
        Hagenstraße 12<br />
        10365 Berlin, Germany<br />
        Email: jennifer.r.rothrock@gmail.com
      </p>

      {/* 2. Angaben gemäß §5 TMG / Information according to §5 TMG */}
      <h2 style={subHeadingStyle}>2. Angaben gemäß §5 TMG / Information according to §5 TMG</h2>
      <p style={paragraphStyle}>
        Dies ist eine private Portfolio-Webseite betrieben von Jennifer Rothrock.<br />
        This is a private portfolio website operated by Jennifer Rothrock.
      </p>

      {/* 3. Verantwortlich für den Inhalt / Content Responsibility */}
      <h2 style={subHeadingStyle}>3. Verantwortlich für den Inhalt / Content Responsibility</h2>
      <p style={paragraphStyle}>
        Verantwortlich im Sinne des Presserechts und TMG:<br />
        Responsible according to German Press Law and TMG:
      </p>
      <p style={paragraphStyle}>
        <strong>Jennifer Rothrock</strong><br />
        Hagenstraße 12<br />
        10365 Berlin, Germany<br />
        Email: jennifer.r.rothrock@gmail.com
      </p>

      {/* 4. Hosting / Web Hosting */}
      <h2 style={subHeadingStyle}>4. Hosting / Web Hosting</h2>
      <p style={paragraphStyle}>
        Die Webseite wird gehostet von / The website is hosted by:<br />
        <strong>Netlify, Inc.</strong><br />
        2325 3rd Street, Suite 296<br />
        San Francisco, CA 94107, USA<br />
        <a href="https://www.netlify.com" target="_blank" rel="noreferrer">https://www.netlify.com</a>
      </p>

      {/* 5. Haftungsausschluss / Disclaimer */}
      <h2 style={subHeadingStyle}>5. Haftungsausschluss / Disclaimer</h2>
      <p style={paragraphStyle}>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.<br />
        Despite careful content control, I assume no liability for the content of external links. The content of linked sites is the sole responsibility of their operators.
      </p>

      {/* 6. Urheberrecht / Copyright */}
      <h2 style={subHeadingStyle}>6. Urheberrecht / Copyright</h2>
      <p style={paragraphStyle}>
        Alle Inhalte dieser Webseite, insbesondere Texte, Bilder, Grafiken und Layout, unterliegen dem Urheberrecht. Vervielfältigung oder Verwendung von Inhalten in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung nicht gestattet.<br />
        All content of this website, including texts, images, graphics, and layout, is subject to copyright. Reproduction or use of content in other electronic or printed publications is not permitted without explicit permission.
      </p>

      {/* 7. Datenschutz / Privacy */}
      <h2 style={subHeadingStyle}>7. Datenschutz / Privacy</h2>
      <p style={paragraphStyle}>
        Informationen zur Verarbeitung personenbezogener Daten finden Sie in der <a href="/privacy-policy">Privacy Policy / Datenschutzerklärung</a>.<br />
        Information on the processing of personal data can be found in the <a href="/privacy-policy">Privacy Policy / Datenschutzerklärung</a>.
      </p>
    </main>
  );
}

