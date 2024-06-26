import "./About.css";


export default function About() {
    return (
        <section className="about-me" id="about">
            <h2 id="title_accent" className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">developer + designer based in Berlin</p>

            <div className="about-me__body">
                <p>Hi, I&apos;m Jennifer, thanks for visiting my website!
                    <br />
                    <br />
                Going into 2024, my career goals revolve around combining my design & UI skills with coding. I&apos;m looking for a full-time role as Frontend/ UI Developer for organisations dedicated to causes close to my heart, including those that support animals, the environment, people, businesses or heritage preservation. I aspire to contribute my skills and experience to a nurturing and supportive work environment that values individuality.
                </p>
            </div>

            <img src="Jen working purple.jpg" alt="image Jen working" className="about-me__img" width="200" height="377"/>
        </section>
    );
}
