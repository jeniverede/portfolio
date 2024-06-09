import "./PortfolioItem.css";

export default function SecondhandShadows() {

    return (
        <>
            <div className="portfolio-page-container">
                <section className="portfolio-page-content">
                    <h1>
                        <strong>Second hand Shadows</strong>
                    </h1>

                    <h3 className="header-subtitle">mobile app for iOS & android</h3>

                    <div className="content-text">
                        <img src="/ShS mockups.jpg" alt="Second hand Shadows mockups" className="main_img" />
                        <div className="paragraph-text-container">
                            <p>The app facilitates the sale of second hand clothing from alternative subcultures including Gothic, Metal, Rockabilly, Post punk, Steampunk, and Gothic Lolita.
                                <br />
                                <br />
                                Vinted and eBayKleinanziegen are popular apps to buy and sell second hand clothing but there is no dedicated app for people in alternative subcultures wanting to sell their used clothing.</p>
                        </div>
                    </div>

                    <img src="/ShS Presentation v4.jpg" alt="Tierheim Berlin case study" className="case-study" />

                </section >
            </div >
        </>
    );
}