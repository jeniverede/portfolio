import "./PortfolioItem.css";

export default function GithubPortfolio() {

    return (
        <>
            <div className="portfolio-page-container">

                <section className="portfolio-page-content">
                    <h1>
                        <strong>
                            Portfolio - Github
                        </strong>
                    </h1>

                    <h3 className="header-subtitle">github repo for portfolio website</h3>

                    <div className="content-text">
                        <p className="bold-text">HTML, CSS, JavaScript, React</p>
                        <div className="img_container">
                        <img src="/portfolio_code.png" className="main_img" alt="screenshot of Github repository for portfolio"
                        style={{width: '50%'}} />
                    </div>
                        <div className="container_button">
                            <a href="https://github.com/jeniverede/portfolio.git" target="_blank" rel="noreferrer" className="btn">Github repository</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}