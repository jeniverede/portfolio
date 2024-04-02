import "./PortfolioItem.css";

export default function BrightStoneCeramics() {

    return (
        <>
            <section className="intro">
                <h1>
                    <strong>
                        Bright Stone Ceramics
                    </strong>
                </h1>
                <h3 className="subtitle--portfolio">e-commerce website for a ceramics studio</h3>
                <img src="/bright-stone-ceramics.jpg" alt="Bright Stone Ceramics homepage" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p>E-commerce website for a fictional ceramics studio.
                    <br />
                    Features functional shopping cart
                </p>
                <p className="bold-text">HTML, CSS, Javascript, React, Typescript, Bootstrap</p>

                <div className="container_button">
                    <a href="https://bright-stone-ceramics.netlify.app"
                        target="blank"
                        className="btn">Visit the website</a>
                </div>

                <div className="img_container">
                    <img src="/BrightStoneCeramicsfull.jpg" className="img" alt="Bright Stone Ceramics website image" />
                </div>

                <div className="container_button">
                    <a href="https://github.com/jeniverede/e-commerce-site.git" target="blank" className="btn">Github repository</a>
                </div>

            </div >
        </>
    );
}