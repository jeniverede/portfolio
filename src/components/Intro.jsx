import "./Intro.css";

export default function Intro() {

    return (
        <>
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    Hello, I'm <strong>Jennifer Rothrock</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">full-stack web/app developer + ui designer</p>
                <img src="/dev-jane-01.jpg" alt="image of Jane" className="intro__img" />
            </section>

            <div className="container_button">
                <button className="btn">
                    <a href="https://drive.google.com/file/d/1xJWlwXnInhdSsPZHk209BNf9ZyHMVXXk/view?usp=sharing" target="blank">
                        resume
                    </a>
                </button>
            </div>
        </>
    );
}