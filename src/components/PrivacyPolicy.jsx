
export default function PrivacyPolicy() {
  const headingStyle = { fontSize: "34px", fontWeight: "bold", marginTop: "2rem" };
  const subHeadingStyle = { fontSize: "24px", fontWeight: "bold", marginTop: "1.5rem" };
  const paragraphStyle = { margin: "0.5rem 0", lineHeight: "1.6" };
  const listStyle = { margin: "0.5rem 0 1rem 1.5rem", lineHeight: "1.6" };

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "Poppins, sans-serif" }}>
      <h1 style={headingStyle}>Datenschutzerklärung / Privacy Policy</h1>
      <p style={paragraphStyle}><strong>Zuletzt aktualisiert:</strong> 17. November 2025<br />
      <strong>Last updated:</strong> November 17, 2025</p>

      {/* 1. Verantwortliche Stelle / Controller */}
      <h2 style={subHeadingStyle}>1. Verantwortliche Stelle / Controller</h2>
      <p style={paragraphStyle}>
        Jennifer Rothrock<br />
        Hagenstraße 12, 10365 Berlin, Germany<br />
        E-Mail: jennifer.r.rothrock@gmail.com<br />
      </p>

      {/* 2. Erhobene personenbezogene Daten / Personal Data Collected */}
      <h2 style={subHeadingStyle}>2. Erhobene personenbezogene Daten / Personal Data Collected</h2>
      <p style={paragraphStyle}>
        Diese Website erhebt personenbezogene Daten nur, wenn Sie diese freiwillig über das Kontaktformular übermitteln.<br />
        This website collects personal data only when you voluntarily submit it via the contact form.
      </p>
      <ul style={listStyle}>
        <li>Name</li>
        <li>E-Mail-Adresse / Email address</li>
        <li>Nachrichteninhalt / Message content</li>
        <li>Sonstige freiwillig angegebene Informationen / Any other information you voluntarily include</li>
      </ul>
      <p style={paragraphStyle}>
        Es werden keine weiteren personenbezogenen Daten automatisch erhoben.<br />
        No other personal data is collected automatically.
      </p>

      {/* 3. Zweck und Rechtsgrundlage / Purpose and Legal Basis */}
      <h2 style={subHeadingStyle}>3. Zweck und Rechtsgrundlage / Purpose and Legal Basis</h2>
      <p style={paragraphStyle}>
        Ihre Daten werden ausschließlich verarbeitet, um auf Ihre Anfrage zu antworten.<br />
        Your data is processed solely to respond to your inquiry.
      </p>
      <p style={paragraphStyle}>
        Rechtsgrundlage: Art. 6(1)(a) DSGVO — Einwilligung<br />
        Legal basis: Art. 6(1)(a) GDPR — your consent
      </p>
      <p style={paragraphStyle}>
        Sie können Ihre Einwilligung jederzeit durch Kontaktaufnahme widerrufen.<br />
        You may withdraw your consent at any time by contacting me.
      </p>

      {/* 4. Kontaktformular / Contact Form (EmailJS) */}
      <h2 style={subHeadingStyle}>4. Kontaktformular (EmailJS) / Contact Form (EmailJS)</h2>
      <p style={paragraphStyle}>
        Das Kontaktformular verwendet EmailJS, um Ihre Nachricht direkt an meine E-Mail-Adresse zu senden.<br />
        The contact form uses EmailJS to send your message directly to my email inbox.
      </p>
      <p style={paragraphStyle}>
        EmailJS Inc.<br />
        2261 Market Street #4321<br />
        San Francisco, CA 94114, USA<br />
        <a href="https://www.emailjs.com" target="_blank" rel="noreferrer">https://www.emailjs.com</a>
      </p>
      <p style={paragraphStyle}>
        Name, E-Mail-Adresse und Nachrichteninhalt werden an EmailJS übermittelt. EmailJS kann Daten auf Servern in den USA gemäß Standardvertragsklauseln (SCCs) verarbeiten.<br />
        Your name, email, and message content are transmitted to EmailJS. EmailJS may process data on U.S. servers under SCCs.
      </p>

      {/* 5. Webanalyse / Analytics (Umami) */}
      <h2 style={subHeadingStyle}>5. Webanalyse (Umami) / Analytics (Umami)</h2>
      <p style={paragraphStyle}>
        Diese Website verwendet Umami, ein datenschutzfreundliches, cookieloses Analyse-Tool.<br />
        This website uses Umami, a privacy-friendly, cookieless analytics tool.
      </p>
      <ul style={listStyle}>
        <li>Keine Cookies / No cookies</li>
        <li>Keine eindeutigen Kennungen / No unique identifiers</li>
        <li>Kein Tracking über Websites hinweg / No cross-site tracking</li>
        <li>Keine Erhebung personenbezogener Daten / No personal data collection</li>
      </ul>
      <p style={paragraphStyle}>
        Es werden nur aggregierte, anonymisierte Nutzungsdaten erhoben.<br />
        Only aggregated, anonymized usage data is collected.
      </p>

      {/* 6. Hosting */}
      <h2 style={subHeadingStyle}>6. Hosting / Hosting</h2>
      <p style={paragraphStyle}>
        Gehostet von:<br />
        Netlify, Inc., 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA<br />
        Hosted by: Netlify, Inc., 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA<br />
        <a href="https://www.netlify.com" target="_blank" rel="noreferrer">https://www.netlify.com</a>
      </p>

      {/* 7. Keine Cookies / No Cookies */}
      <h2 style={subHeadingStyle}>7. Keine Cookies / No Cookies</h2>
      <p style={paragraphStyle}>
        Diese Website verwendet keine Cookies, Werbung oder Tracking-Pixel.<br />
        This website does not use cookies, advertising, or tracking pixels.
      </p>
      <p style={paragraphStyle}>
        Schriftarten sind selbst gehostet (WOFF/WOFF2).<br />
        Fonts are self-hosted (WOFF/WOFF2).
      </p>

      {/* 8. Ihre Rechte / Your Rights */}
      <h2 style={subHeadingStyle}>8. Ihre Rechte / Your Rights</h2>
      <ul style={listStyle}>
        <li>Recht auf Auskunft (Art. 15) / Right of access</li>
        <li>Recht auf Berichtigung (Art. 16) / Right to rectification</li>
        <li>Recht auf Löschung (Art. 17) / Right to erasure</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18) / Right to restrict processing</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20) / Right to data portability</li>
        <li>Recht auf Widerruf der Einwilligung (Art. 7(3)) / Right to withdraw consent</li>
        <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77) / Right to lodge a complaint</li>
      </ul>
      <p style={paragraphStyle}>
        Üben Sie Ihre Rechte aus, indem Sie mich kontaktieren: your-email@example.com<br />
        Exercise your rights by contacting me: your-email@example.com
      </p>

      {/* 9. Änderungen / Changes */}
      <h2 style={subHeadingStyle}>9. Änderungen / Changes</h2>
      <p style={paragraphStyle}>
        Diese Datenschutzerklärung kann aktualisiert werden; die neueste Version ist immer auf dieser Seite verfügbar.<br />
        This Privacy Policy may be updated; the latest version is always available on this page.
      </p>
    </main>
  );
}






