import "./Nav.css";
import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Nav() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelectorAll('.nav__link');

        const handleNavToggleClick = () => {
            document.body.classList.toggle('nav-open');
        };

        const handleNavLinkClick = () => {
            document.body.classList.remove('nav-open');
        };

        if (navToggle) {
            navToggle.addEventListener('click', handleNavToggleClick);
        }

        navLinks.forEach((link) => {
            link.addEventListener('click', handleNavLinkClick);
        });

        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', handleNavToggleClick);
            }

            navLinks.forEach((link) => {
                link.removeEventListener('click', handleNavLinkClick);
            });
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 810); // Adjust breakpoint as needed
        };
        handleResize(); // Call initially to set the initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            {/* Regular Navbar for Desktop */}
            {!isMobile && (
                <nav className="desktop-nav">
                    <ul className="nav-list-desktop">
                        <div className="nav-desktop-container">
                            <img src="/jennifer.svg" alt="logo" />
                            <li className="nav__item"><Link to="/#home" className="nav__link">Home</Link></li>
                            <li className="nav__item"><Link to="/#services" className="nav__link">My Services</Link></li>
                            <li className="nav__item"><Link to="/#about" className="nav__link">About me</Link></li>
                            <li className="nav__item"><Link to="/#work" className="nav__link">My Work</Link></li>
                            <li className="nav__item"><Link to="/#references" className="nav__link">References</Link></li>
                            <li className="nav__item"><Link to="/#contact" className="nav__link">Contact</Link></li>
                            <li className="nav__item"><Link to="https://drive.google.com/file/d/1xvWsWIL3VHgUHEhgffHrQ_BG21T5v7G_" className="nav__link" target="_blank" rel="noreferrer">Resume</Link></li>
                        </div>
                    </ul>

                </nav>
            )}

            {/* Hamburger Menu for Mobile */}
            {isMobile && (
                <div className="mobile-nav">
                    <img src="/jennifer.svg" alt="logo" />

                    <Link to="https://drive.google.com/file/d/1xvWsWIL3VHgUHEhgffHrQ_BG21T5v7G_" target="_blank" rel="noreferrer" className="nav__link">Resume</Link>

                    <button className="nav-toggle" aria-label="toggle navigation">
                        <span className="hamburger"></span>
                    </button>

                    <nav className="nav">
                        <ul className="nav-list-mobile">
                            <li className="nav__item"><Link to="/#home" className="nav__link">Home</Link></li>
                            <li className="nav__item"><Link to="/#services" className="nav__link">My Services</Link></li>
                            <li className="nav__item"><Link to="/#about" className="nav__link">About me</Link></li>
                            <li className="nav__item"><Link to="/#work" className="nav__link">My Work</Link></li>
                            <li className="nav__item"><Link to="/#references" className="nav__link">References</Link></li>
                            <li className="nav__item"><Link to="/#contact" className="nav__link">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}


