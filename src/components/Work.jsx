import "./Work.css";

export default function Work() {

    return (
        <>
            <section className="my-work" id="work">
                <h2 className="section__title section__title">My Work</h2>

                <h3 className="section__title section__title--work">Web Development</h3>

                <div className="portfolio">
                    <a href="/collectiondigital" target="blank" className="portfolio__item">
                        <img src="/CD Mockup MacBook Pro 14 401.jpeg" alt="" className="portfolio__img" />
                        <p className="portfolio__item--title">Collection Digital - Group project</p>
                    </a>
                    {/* https://collection-digital.netlify.app */}
                    <a href="/costumeblog" target="blank" className="portfolio__item">
                        <img src="/CCB 401.png" alt="" className="portfolio__img" />
                        <p className="portfolio__item--title">Costume Blog</p>
                    </a>
                    {/* https://costumecollectionsblog.netlify.app */}
                    <a href="/githubportfolio" target="blank" className="portfolio__item">
                        <img src="/portfolio_code.png" alt="" className="portfolio__img" />
                        <p className="portfolio__item--title">Portfolio - Github</p>
                    </a>
                </div>

                <a href="https://github.com/jeniverede" target="blank" className="btn">My Github repository</a>

                    {/* https://github.com/jeniverede/portfolio.git */}
                <h3 className="section__title section__title--work">UI Design</h3>

                <div className="portfolio">
                    <a href="museumguideberlin" target="blank" className="portfolio__item">
                        <img src="/MGB cover img 2.jpg" alt="Museum Guide Berlin" className="portfolio__img" />
                        <p className="portfolio__item--title">Museum Guide Berlin</p>
                    </a>

                    <a href="tierheimberlin" target="blank" className="portfolio__item">
                        <img src="/Tierheim Berlin cover img 2.jpg" alt="Tierheim Berlin" className="portfolio__img" />
                        <p className="portfolio__item--title">Tierheim Berlin</p>
                    </a>

                    <a href="secondhandshadows" target="blank" className="portfolio__item">
                        <img src="/ShS Card Mockup iOS 401.jpg" alt="" className="portfolio__img" />
                        <p className="portfolio__item--title">Second hand Shadows</p>
                    </a>
                </div>

            </section >
        </>
    );
}