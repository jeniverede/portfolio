import "./PortfolioItem.css";

export default function TierheimBerlin() {

    return (
        <>
            <div className="portfolio-page-container">
                <section className="portfolio-page-content">
                    <h1>
                        <strong>Tierheim Berlin</strong>
                    </h1>

                    <h3 className="header-subtitle">mobile app for iOS & website redesign</h3>

                    <div className="content-text">
                        <img src="/Tierheim Berlin mockups.jpg" alt="Tierheim Berlin mockups" className="main_img" />
                        <div className="paragraph-text-container">
                            <p>Tierheim Berlin is the official association for animal welfare in Berlin. The organisation rescues and rehabilitates animals that are strays or have been abandoned or abused. They are funded mainly by donations and adoptions.
                                <br />
                                <br />
                                Currently Tierheim Berlin only has a website. My idea was to update and simplify the visual design of the website and develop a mobile app to make pet adoption and donation easier.</p>
                        </div>
                    </div>

                    <img src="/Tierheim Berlin v4.jpg" alt="Tierheim Berlin case study" className="case-study" />

                </section>
            </div>
        </>
    );
}