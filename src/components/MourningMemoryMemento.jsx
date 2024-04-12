import "./PortfolioItem.css";

export default function MourningMemoryMemento() {

    return (
        <>
            <section className="intro">
                <h1>
                    <strong>
                        Mourning, Memory, <br/>Memento
                    </strong>
                </h1>
                <h3 className="subtitle--portfolio">Website documenting my thesis from <br/>the MA Fashion Curation programme at London College of Fashion</h3>
                <img src="/MMM-home.jpg" alt="Image of Mourning, Memory, Memento homepage" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p>Website documenting my thesis subject of Victorian mourning and the exhibition design.
                Features image carousel.
                </p>
                <p className="bold-text">HTML, CSS, Javascript, React</p>

                <div className="container_button">
                    <a href="https://mourning-memory-memento.netlify.app"
                        target="blank"
                        className="btn">Visit the website</a>
                </div>

                <div className="img_container">
                    <img src="/MMM-home-full.jpg" className="img" alt="Mourning, Memory, Memento website image" 
                    style={{ border: '1px solid black' }}/>
                </div>

                <div className="container_button">
                    <a href="https://github.com/jeniverede/Memory_Mourning_Memento.git" target="blank" className="btn">Github repository</a>
                </div>

            </div >
        </>
    );
}