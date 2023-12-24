import "./SecondhandShadows.css";

export default function SecondhandShadows() {

    return (
        <>
            <section className="intro">
                <h1 className="section__title section__title--project">
                    <strong>Second hand Shadows</strong>
                </h1>
                <p className="section__subtitle section__subtitle--project">Mobile app for iOS & Android</p>
                <img src="/ShS Card Mockup iOS 250.jpg" alt="Second hand Shadows mockups" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p>The app facilitates the sale of second hand clothing from alternative subcultures including Gothic, Metal, Rockabilly, Post punk, Steampunk, and Gothic Lolita.
                <br/>
                <br/>
                Vinted and eBayKleinanziegen are popular apps to buy and sell second hand clothing but there is no dedicated app for people in alternative subcultures wanting to sell their used clothing.</p>

                <img src="/ShS Presentation v4.jpg" alt="Tierheim Berlin case study" className="case-study" />

            </div>
        </>
    );
}