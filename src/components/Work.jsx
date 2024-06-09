import "./Work.css";

export default function Work() {

    return (
        <>
            <section className="my-work" id="work">
                <h2 className="section__title section__title">My Work</h2>

                <h3 className="section__title section__title--work">Web Development</h3>

                <div className="portfolio">
                    <a href="/collectiondigital" target="_blank" rel="noreferrer" className="portfolio__item">
                        <img src="/CD Mockup MacBook Pro 14 401.jpeg" alt="Collection Digital Homepage" className="portfolio__img" />
                        <p className="portfolio__item--title">Collection Digital - Group project</p>
                    </a>
                    {/* https://collection-digital.netlify.app */}

                    <a href="/brightstoneceramics" target="_blank" rel="noreferrer" className="portfolio__item">
                        <img src="/bright-stone-ceramics.jpg" alt="Bright Stone Ceramics homepage" className="portfolio__img" />
                        <p className="portfolio__item--title">Bright Stone Ceramics</p>
                    </a>
                    {/* https://bright-stone-ceramics.netlify.app */}

                    <a href="/githubportfolio" target="_blank" rel="noreferrer" className="portfolio__item">
                        <img src="/portfolio_code.png" alt="VS Code for portfolio" className="portfolio__img" />
                        <p className="portfolio__item--title">Portfolio - Github</p>
                    </a>
                    {/* https://github.com/jeniverede/portfolio.git */}

                    <a href="/mourning-memory-memento" target="_blank" rel="noreferrer" className="portfolio__item">
                        <img src="/MMM-home.jpg" alt="Mourning, Memory, Memento website image" className="portfolio__img" />
                        <p className="portfolio__item--title">Mourning, Memory, Memento</p>
                    </a>
                    {/* https://mourning-memory-memento.netlify.app */}
                    </div>

                <h3 className="section__title section__title--work">UI Design</h3>

                <div className="portfolio">
                    <a href="museumguideberlin" target="_blank" rel="noreferrer" className="portfolio__item">
                        <img src="/MGB cover img 2.jpg" alt="Museum Guide Berlin" className="portfolio__img" />
                        <p className="portfolio__item--title">Museum Guide Berlin</p>
                    </a>

                    <a href="tierheimberlin" target="_blank" rel="noreferrer" className="portfolio__item">
                        <img src="/Tierheim Berlin cover img 2.jpg" alt="Tierheim Berlin" className="portfolio__img" />
                        <p className="portfolio__item--title">Tierheim Berlin</p>
                    </a>

                    <a href="secondhandshadows" target="_blank" rel="noreferrer" className="portfolio__item">
                        <img src="/ShS Card Mockup iOS 401.jpg" alt="" className="portfolio__img" />
                        <p className="portfolio__item--title">Second hand Shadows</p>
                    </a>
                </div>

            </section >
        </>
    );
}