import "./PortfolioItem.css";

export default function CollectionDigital() {

    return (
        <>
            <section className="intro">
                <h1>
                    <strong>Collection Digital</strong>
                </h1>
                <h3 className="subtitle--portfolio">desktop app for collectors and small museums</h3>
                <img src="/CD Mockup MacBook Pro 14 401.jpeg" alt="Collection Digital mockups" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p>Design/Concept: The concept for Collection Digital came out of my time living in London, working as a collection assistant for small museums and individual collectors.</p>
                <p className="bold-text">HTML, CSS/Bootstrap, JavaScript, React, Node.js, MongoDB</p>

                <div className="container_button">
                    <a href="https://collection-digital.netlify.app"
                        target="blank"
                        className="btn">Visit Collection Digital</a>
                </div>

                <div className="img_container">
                    <img src="/CD Mockups.jpg" className="img_mockup" alt="Collection Digtial mockups" />
                </div>

                <div className="container_button">
                    <a href="https://github.com/jeniverede?tab=stars" target="blank" className="btn">Github repository</a>
                </div>

                <p>Collaborators: Sona Chaboud, Jennifer Rothrock, Kevin Kalus & Reagan Sassan</p>

            </div >
        </>
    );
}