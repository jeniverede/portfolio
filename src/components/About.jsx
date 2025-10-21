import "./About.css";


export default function About() {
    return (
        <section className="about-me" id="about">
            <header>
                <h2 id="title_accent" className="section__title section__title--about">Who I am</h2>
                <p className="section__subtitle section__subtitle--about">digital designer + developer based in Berlin</p>
            </header>

            <article className="about-me__body">
                <p>Hi, I&apos;m Jennifer, thanks for visiting my website!
                    <br />
                    <br />
                    My career goals revolve around combining my design & UI/UX skills with coding. I&apos;m looking for a full-time role as Web Designer / Frontend Developer for organisations dedicated to causes close to my heart, including those that support animals, the environment, creativity, or heritage preservation. I want to contribute my skills and experience to a nurturing and supportive work environment that values individuality.
                </p>
            </article>

            <img src="Jen computer.jpg" alt="image Jen working" className="about-me__img" style={{ width: "100%", height: "auto" }}
 />
        </section>
    );
}
