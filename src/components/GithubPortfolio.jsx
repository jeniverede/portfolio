import "./PortfolioItem.css";

export default function GithubPortfolio() {

    return (
        <>
            <section className="intro">
                <h1>
                    <strong>Portfolio - Github</strong>
                </h1>
                <h3 className="subtitle--portfolio">Github repo for portfolio website</h3>
                <img src="/portfolio_code.png" alt="Collection Digital mockups" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p className="bold-text">HTML, CSS, JavaScript, React</p>

                <div className="container_button">
                    <a href="https://github.com/jeniverede/portfolio.git" target="blank" className="btn">Github repository</a>
                </div>

            </div>
        </>
    );
}