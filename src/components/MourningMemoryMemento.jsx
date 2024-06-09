import "./PortfolioItem.css";

export default function MourningMemoryMemento() {

    return (
        <>
            <div className="portfolio-page-container">
                <section className="portfolio-page-content">
                    <h1>
                        <strong>
                            Mourning, Memory,Memento
                        </strong>
                    </h1>
 
                    <h3 className="header-subtitle">Website documenting my thesis from the MA Fashion Curation programme at London College of Fashion</h3>


                    <div className="content-text">
                        <p>Website documenting my thesis subject of Victorian mourning and the exhibition design.
                            Features image carousel.
                        </p>
                        <p className="bold-text">HTML, CSS, Javascript, React</p>

                        <div className="img_container">
                            <img src="/MMM-home-full.jpg" className="main_img" alt="Mourning, Memory, Memento website image"
                                style={{ border: '2px solid black' }} />
                        </div>

                        <div className="container_button">
                            <a href="https://mourning-memory-memento.netlify.app"
                                target="_blank" rel="noreferrer"
                                className="btn">Visit the website</a>
                        </div>

                        <div className="container_button">
                            <a href="https://github.com/jeniverede/Memory_Mourning_Memento.git" target="_blank" rel="noreferrer" className="btn">Github repository</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}