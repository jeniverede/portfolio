import "./Intro.css";

export default function Intro() {

    return (
        <>
            <div id="intro-section" className="section-container">
                <div className="items-container">
                    <div className="div-img-bg">
                        <div >
                            <img src="/Jen 24 purple.jpg" className="intro-section-img" alt="me" />
                        </div>
                    </div>


                    <div className="intro-descr">
                        <h2 className="main-heading"> Hello, my name is <strong>Jennifer Rothrock</strong></h2>
                        <br />
                        <p className="paragraph">I&apos;m a Frontend Developer/ UI Designer who loves clean, simple & unique designs. </p>
                    </div>
                </div>
            </div>
        </>
    );
}