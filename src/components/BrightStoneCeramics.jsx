import "./PortfolioItem.css";

export default function BrightStoneCeramics() {

    return (
        <>
            <div className="portfolio-page-container">

                <section className="portfolio-page-content">
                    <h1>
                        <strong>
                            Bright Stone Ceramics
                        </strong>
                    </h1>

                    <h3 className="header-subtitle">e-commerce website for a ceramics studio</h3>

                    <div className="content-text">
                        <p>E-commerce website for a fictional ceramics studio.
                            <br />
                            Features functional shopping cart
                        </p>
                        <p className="bold-text">HTML, CSS, Javascript, React,  Typescript, Bootstrap</p>
                    </div>

                    <div className="img_container">
                        <img src="/BrightStoneCeramicsfull.jpg" className="main_img" alt="Bright Stone Ceramics website image" />
                    </div>

                    <div className="container_button">
                        <a href="https://bright-stone-ceramics.netlify.app"
                            target="_blank" rel="noreferrer"
                            className="btn">Visit the website</a>
                    </div>

                    <div className="container_button">
                        <a href="https://github.com/jeniverede/e-commerce-site.git" target="_blank" rel="noreferrer" className="btn">Github repository</a>
                    </div>

                </section>
            </div>
        </>
    );
}