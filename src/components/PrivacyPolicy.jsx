
export default function PrivacyPolicy() {
  const headingStyle = { fontSize: "34px", fontWeight: "bold", marginTop: "2rem" };
  const subHeadingStyle = { fontSize: "24px", fontWeight: "bold", marginTop: "1.5rem" };
  const paragraphStyle = { margin: "0.5rem 0", lineHeight: "1.6" };
  const listStyle = { margin: "0.5rem 0 1rem 1.5rem", lineHeight: "1.6" };

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "Poppins, sans-serif" }}>
      <h1 style={headingStyle}>Privacy Policy / Datenschutzerklärung</h1>
      <p style={paragraphStyle}><strong>Last updated / Zuletzt aktualisiert:</strong> November 17, 2025</p>

      {/* 1. Controller */}
      <h2 style={subHeadingStyle}>1. Controller / Verantwortliche Stelle</h2>
      <p style={paragraphStyle}>
        <strong>Jennifer Rothrock</strong><br />
        Germany<br />
        Email: jennifer.r.rothrock@gmail.com
      </p>

      {/* 2. Personal Data Collected */}
      <h2 style={subHeadingStyle}>2. Personal Data Collected / Erhobene personenbezogene Daten</h2>
      <p style={paragraphStyle}>
        This website collects personal data only when you voluntarily submit it via the contact form.<br />
        Diese Website erhebt personenbezogene Daten nur, wenn Sie diese freiwillig über das Kontaktformular übermitteln.
      </p>
      <ul style={listStyle}>
        <li>Name / Name</li>
        <li>Email address / E-Mail-Adresse</li>
        <li>Message content / Nachrichteninhalt</li>
        <li>Any other information you voluntarily include / Sonstige freiwillig angegebene Informationen</li>
      </ul>
      <p style={paragraphStyle}>No other personal data is collected automatically / Es werden keine weiteren personenbezogenen Daten automatisch erhoben.</p>

      {/* 3. Purpose and Legal Basis */}
      <h2 style={subHeadingStyle}>3. Purpose and Legal Basis / Zweck und Rechtsgrundlage</h2>
      <p style={paragraphStyle}>
        Your data is processed solely to respond to your inquiry.<br />
        Ihre Daten werden ausschließlich verarbeitet, um auf Ihre Anfrage zu antworten.
      </p>
      <p style={paragraphStyle}>
        Legal basis: Art. 6(1)(a) GDPR — your consent / Rechtsgrundlage: Art. 6(1)(a) DSGVO — Ihre Einwilligung
      </p>
      <p style={paragraphStyle}>You may withdraw your consent at any time by contacting me / Sie können Ihre Einwilligung jederzeit durch Kontaktaufnahme widerrufen.</p>

      {/* 4. Contact Form */}
      <h2 style={subHeadingStyle}>4. Contact Form (EmailJS) / Kontaktformular (EmailJS)</h2>
      <p style={paragraphStyle}>
        The contact form uses <strong>EmailJS</strong> to send your message directly to my email inbox.<br />
        Das Kontaktformular verwendet <strong>EmailJS</strong>, um Ihre Nachricht direkt an meine E-Mail-Adresse zu senden.
      </p>
      <p style={paragraphStyle}>
        EmailJS Inc.<br />
        2261 Market Street #4321<br />
        San Francisco, CA 94114, USA<br />
        <a href="https://www.emailjs.com" target="_blank" rel="noreferrer">https://www.emailjs.com</a>
      </p>
      <p style={paragraphStyle}>
        Your name, email, and message content are transmitted to EmailJS. EmailJS may process data on U.S. servers under SCCs.<br />
        Name, E-Mail-Adresse und Nachrichteninhalt werden an EmailJS übermittelt. EmailJS kann Daten auf Servern in den USA gemäß Standardvertragsklauseln (SCCs) verarbeiten.
      </p>

      {/* 5. Analytics */}
      <h2 style={subHeadingStyle}>5. Analytics (Umami) / Webanalyse (Umami)</h2>
      <p style={paragraphStyle}>
        This website uses <strong>Umami Analytics</strong>, a privacy-friendly, cookieless analytics tool.<br />
        Diese Website verwendet <strong>Umami Analytics</strong>, ein datenschutzfreundliches, cookieloses Analyse-Tool.
      </p>
      <ul style={listStyle}>
        <li>No cookies / Keine Cookies</li>
        <li>No unique identifiers / Keine eindeutigen Kennungen</li>
        <li>No cross-site tracking / Kein Tracking über Websites hinweg</li>
        <li>No personal data collection / Keine Erhebung personenbezogener Daten</li>
      </ul>
      <p style={paragraphStyle}>
        Only aggregated, anonymized usage data is collected / Es werden nur aggregierte, anonymisierte Nutzungsdaten erhoben.<br />
        Legal basis: Art. 6(1)(f) GDPR — legitimate interest / Rechtsgrundlage: Art. 6(1)(f) DSGVO — berechtigtes Interesse
      </p>

      {/* 6. Hosting */}
      <h2 style={subHeadingStyle}>6. Hosting / Hosting</h2>
      <p style={paragraphStyle}>
        Hosted by / Gehostet von:<br />
        Netlify, Inc.<br />
        2325 3rd Street, Suite 296<br />
        San Francisco, CA 94107, USA<br />
        <a href="https://www.netlify.com" target="_blank" rel="noreferrer">https://www.netlify.com</a>
      </p>
      <p style={paragraphStyle}>
        Server logs are collected for security and performance / Serverprotokolle werden zu Sicherheits- und Leistungszwecken erhoben.<br />
        Legal basis: Art. 6(1)(f) GDPR / Rechtsgrundlage: Art. 6(1)(f) DSGVO — berechtigtes Interesse
      </p>

      <h3 style={subHeadingStyle}>GitHub</h3>
      <p style={paragraphStyle}>
        Source code hosted on / Quellcode gehostet auf:<br />
        GitHub, Inc.<br />
        88 Colin P Kelly Jr St, San Francisco, CA 94107, USA<br />
        <a href="https://github.com" target="_blank" rel="noreferrer">https://github.com</a>
      </p>
      <p style={paragraphStyle}>
        GitHub may collect technical data during deployment; visitor data is not processed unless you access GitHub directly / GitHub kann technische Daten während der Bereitstellung erfassen; Besucherdaten werden nur verarbeitet, wenn Sie direkt auf GitHub zugreifen.
      </p>

      {/* 7. No Cookies */}
      <h2 style={subHeadingStyle}>7. No Cookies / Keine Cookies</h2>
      <p style={paragraphStyle}>
        This website does not use cookies, advertising, or tracking pixels / Diese Website verwendet keine Cookies, Werbung oder Tracking-Pixel.
      </p>
      <p style={paragraphStyle}>Fonts are self-hosted (WOFF/WOFF2) / Schriftarten sind selbst gehostet (WOFF/WOFF2).</p>

      {/* 8. Data Retention */}
      <h2 style={subHeadingStyle}>8. Data Retention / Speicherung von Daten</h2>
      <ul style={listStyle}>
        <li>Contact form data kept only as long as necessary / Kontaktformular-Daten nur solange gespeichert, wie nötig</li>
        <li>Email archived according to standard practices / E-Mails werden nach üblichen Praktiken archiviert</li>
        <li>Netlify logs retained temporarily / Netlify-Logs werden vorübergehend gespeichert</li>
      </ul>

      {/* 9. Your Rights */}
      <h2 style={subHeadingStyle}>9. Your Rights / Ihre Rechte</h2>
      <ul style={listStyle}>
        <li>Right of access / Recht auf Auskunft (Art. 15)</li>
        <li>Right to rectification / Recht auf Berichtigung (Art. 16)</li>
        <li>Right to erasure / Recht auf Löschung (Art. 17)</li>
        <li>Right to restrict processing / Recht auf Einschränkung der Verarbeitung (Art. 18)</li>
        <li>Right to data portability / Recht auf Datenübertragbarkeit (Art. 20)</li>
        <li>Right to withdraw consent / Recht auf Widerruf der Einwilligung (Art. 7(3))</li>
        <li>Right to lodge a complaint / Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77)</li>
      </ul>
      <p style={paragraphStyle}>Exercise your rights by contacting me / Üben Sie Ihre Rechte aus, indem Sie mich kontaktieren: your-email@example.com</p>

      {/* 10. Data Security */}
      <h2 style={subHeadingStyle}>10. Data Security / Datensicherheit</h2>
      <p style={paragraphStyle}>Technical and organizational measures are taken to protect your data / Technische und organisatorische Maßnahmen schützen Ihre Daten.</p>

      {/* 11. Changes */}
      <h2 style={subHeadingStyle}>11. Changes / Änderungen</h2>
      <p style={paragraphStyle}>
        This Privacy Policy may be updated; the latest version is always available on this page / Diese Datenschutzerklärung kann aktualisiert werden; die neueste Version ist immer auf dieser Seite verfügbar.
      </p>
    </main>
  );
}





