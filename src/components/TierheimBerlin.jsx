import "./TierheimBerlin.css";

export default function TierheimBerlin() {

    return (
        <>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    <strong>Tierheim Berlin</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">Mobile app for iOS & website redesign</p>
                <img src="/Tierheim Berlin cover img 2.jpg" alt="Tierheim Berlin mockups" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p>Tierheim Berlin is the official association for animal welfare in Berlin. Tierheim Berlin rescues and rehabilitates animals that are strays or have been abandoned or abused. They are funded mainly by donations and adoptions.

                Currently Tierheim Berlin only has a website. My idea was to update and simplify the visual design of the website and develop a mobile app to make pet adoption and donation easier.</p>

                <img src="/Tierheim Berlin v4.jpg" alt="Tierheim Berlin case study" className="case-study"/>

            </div>
        </>
    );
}