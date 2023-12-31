import "./MuseumGuideBerlin.css";

export default function MuseumGuideBerlin() {

    return (
        <>
            <section className="intro">
                <h1 className="section__title section__title--project-mgb">
                    <strong>Museum Guide Berlin</strong>
                </h1>
                <p className="section__subtitle section__subtitle--project-mgb">Mobile/Desktop/Tablet app for iOS</p>
                <img src="/MGB cover img 2.jpg" alt="Museum Guide Berlin mockups" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p>A location based mobile app for Berlin’s museums. The mobile app collects and presents information for all museums in Berlin, providing users with one place to access information about museums and exhibitions.

                My vision is that once information is easier to find in one dedicated app; visitors will prioritise museums in their free time.</p>

                <img src="/Museum Guide Berlin v4.jpg" alt="Museum Guide Berlin case study" className="case-study"/>

            </div>
        </>
    );
}