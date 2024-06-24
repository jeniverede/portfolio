import "./Services.css";

export default function Services() {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What you get</h2>
            <div className="services">
                <div className="service">
                    <h3>Software Development</h3>
                    <p className="left_align">My motivation to transition into coding came from a desire to go beyond designing digital products. I wanted to understand and be part of the process of building these products from the ground up.</p>
                </div>

                <div className="service">
                    <h3>UI Design</h3>
                    <p className="left_align">With 25 years of experience in design and product development, I
                    bring my  expertise in creating visually appealing and user-friendly digital interfaces. I have a unique blend of creativity, aesthetic taste, and business perspective. 
                    </p>
                </div>

                <div className="service">
                    <h3>Professionalism</h3>
                    <p className="left_align">I have essential skills in communication, teamwork, organisation and problem-solving. As a person I am friendly, reliable and work well on a team or independently.</p>
                </div>
            </div>

            <a href="#work" className="btn">my work</a>

        </section>
    );
}