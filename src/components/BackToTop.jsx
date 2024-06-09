import { useState } from 'react';
import '../components/BackToTopStyle.css';

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    };

    // Function to handle scrolling and show/hide the button
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    return (
        <div>
            {isVisible &&
                <button className="back-to-top-btn" onClick={scrollToTop}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            }
        </div>
    );
}


