import "./Footer.css";

export default function Footer() {

    return (
        <footer id="footer" className="footer">
            <h3 id="email-address">jennifer.r.rothrock(at)gmail(dot)com</h3>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="http://www.linkedin.com/in/jennifer-rothrock/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/jeniverede" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
            </ul>

            <div className="container_impressum">
  <a
    className="social-list__link"
    href="/impressum"
    target="_blank"
    rel="noreferrer"
  >
    Impressum
  </a>
  
  <a
    className="social-list__link"
    href="/privacy-policy"
    target="_blank"
    rel="noreferrer"
    style={{ marginLeft: "1rem" }} // optional spacing between links
  >
    Privacy Policy
  </a>
</div>

        </footer>
    );
}
