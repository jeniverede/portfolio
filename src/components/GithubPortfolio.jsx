import "./GithubPortfolio.css";

export default function GithubPortfolio() {

    return (
        <>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    <strong>Portfolio - Github</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">Github repo for portfolio website</p>
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