import "./Intro.css";

export default function Intro() {

    return (
        <>
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    Hello, I'm <strong>Jennifer Rothrock</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">full-stack web/app developer + ui designer</p>
                <img src="https://placehold.co/250x250" alt="image of Jane" className="intro__img" />
            </section>

            <div className="container_button">
                <a href="https://drive.google.com/file/d/12VS6GJ974OjF-4VmffzIx7YN9dtJcdfp/view?usp=sharing" target="blank" className="btn">resume</a>
            </div>
        </>
    );
}