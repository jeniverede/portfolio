import "./PortfolioItem.css";

export default function MuseumGuideBerlin() {

    return (
        <>
            <div className="portfolio-page-container">
                <section className="portfolio-page-content">
                    <h1>
                        <strong>Museum Guide Berlin</strong>
                    </h1>

                    <h3 className="header-subtitle">mobile/desktop/tablet app for iOS</h3>

                    <div className="content-text">
                        <img src="/MGB mockups.jpg" alt="Museum Guide Berlin mockups" className="main_img" />
                        <div className="paragraph-text-container">
                            <p>A location based mobile app for Berlin’s museums. The mobile app collects and presents information for all museums in Berlin, providing users with one place to access information about museums and exhibitions.
                                <br />
                                <br />
                                My vision is that once information is easier to find in one dedicated app; visitors will prioritise museums in their free time.</p>
                        </div>
                    </div>

                    <img src="/Museum Guide Berlin v4.jpg" alt="Museum Guide Berlin case study" className="case-study" />

                </section>
            </div>
        </>
    );
}