import "./Intro.css";

export default function Intro() {

    return (
        <>
            <section id="intro-section" className="section-container">
                <div className="items-container">
                    <div className="div-img-bg">
                        <div >
                            <img src="/Jen glasses.jpg" className="intro-section-img" alt="me" />
                        </div>
                    </div>


                    <article className="intro-descr">
                        <h2 className="main-heading"> Hello, my name is <strong>Jennifer Rothrock</strong></h2>
                        <br />
                        <p className="paragraph">I&apos;m a UI/UX, Web Designer &amp; Frontend Developer who loves clean, simple & unique designs. </p>
                    </article>
                </div>
            </section>
        </>
    );
}