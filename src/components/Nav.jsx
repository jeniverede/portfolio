import "./Nav.css";
import { useEffect } from "react";

export default function Nav() {
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

    return (
        <header>
            <img src="/{ jennifer }.svg" alt="logo" />

            <a href="https://drive.google.com/file/d/1edZ6xYDagF-Dx2HnoukKNBTG9javHdzG/view?usp=sharing" target="blank" className="resume">resume</a>

            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
    );
}
