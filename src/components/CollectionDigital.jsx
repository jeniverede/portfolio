import "./PortfolioItem.css";

export default function CollectionDigital() {

    return (
        <>
            <div className="portfolio-page-container">

                <section className="portfolio-page-content">
                    <h1>
                        <strong>
                            Collection Digital
                        </strong>
                    </h1>

                    <h3 className="header-subtitle">desktop app for collectors and small museums</h3>

                    <div className="content-text">
                        <p>Design/Concept: The concept for Collection Digital came out of my time living in London,
                            <br />
                            working as a collection assistant for small museums and individual collectors.</p>
                        <p>Collaborators: Sona Chaboud, Jennifer Rothrock, Kevin Kalus & Reagan Sassan</p>
                        <p className="bold-text">HTML, CSS/Bootstrap, JavaScript, React, Node.js, MongoDB</p>
                    </div>

                    <div className="img_container">
                        <img src="/CD Mockups.jpg" className="main_img" alt="Collection Digtial mockups" />
                    </div>

                    <div className="container_button">
                        <a href="https://collection-digital.netlify.app"
                            target="_blank" rel="noreferrer"
                            className="btn">Visit Collection Digital</a>
                    </div>

                    <div className="container_button">
                        <a href="https://github.com/jeniverede?tab=stars" target="_blank" rel="noreferrer" className="btn">Github repository</a>
                    </div>

                </section>
            </div>
        </>
    );
}