import "./Intro.css";

export default function Intro() {

    return (
        <>
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    Hello, I'm <strong>Jennifer Rothrock</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">frontend web/app developer + ui designer</p>
                <img src="Jen headshot purple.jpg" alt="image of Jen" className="intro__img" />
            </section>

            <div className="container_button">
                <a href="https://drive.google.com/file/d/1JfZfcirSNFJAl0JA0p53ukkdPLu-2_lV/view?usp=sharing" target="blank" className="btn">resume</a>
            </div>

        </>
    );
}