import "./PortfolioItem.css";

export default function CostumeBlog() {

    return (
        <>
            <section className="intro">
                <h1>
                    <strong>
                        Costume Collections 
                        <br/>
                        Blog
                    </strong>
                </h1>
                <p>Personal blog for costume collections</p>
                <img src="/CCB 401.png" alt="Costume Collections Blog" className="intro__img" />
            </section>

            <div className="portfolio-item-individual">
                <p>A blog documenting the costume collections I visit on my travels.</p>
                <p className="bold-text">HTML, CSS</p>

                <div className="container_button">
                    <a href="https://costumecollectionsblog.netlify.app"
                        target="blank"
                        className="btn">Visit the blog</a>
                </div>

                <div className="img_container">
                    <img src="/CCB full screen.png" className="img_mockup" alt="Costume Collections Blog image" />
                </div>

                <div className="container_button">
                    <a href="https://github.com/jeniverede?tab=stars" target="blank" className="btn">Github repository</a>
                </div>

            </div >
        </>
    );
}