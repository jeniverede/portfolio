import "./Footer.css";

export default function Footer() {

    return (
        <footer className="footer">
            <h3 id="email-address">jennifer.r.rothrock(at)gmail(dot)com</h3>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="http://www.linkedin.com/in/jennifer-rothrock/" target="blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/jeniverede" target="blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
            </ul>

            <div className="container_impressum">
                    <a className="social-list__link" href="https://drive.google.com/file/d/1nZAWEWjlK0aRSQGeMCyQ2zQzWvZR7lzU/view?usp=sharing" target="blank">
                        Impressum
                    </a>
                </div>

                <div>
                    <p>Thank you to Kevin Powell from Scrimba for the inspiration.</p>
                </div>

        </footer>

    );

}
