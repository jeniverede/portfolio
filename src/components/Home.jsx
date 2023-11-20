import './Home.css';
import Intro from "./Intro";
import Services from "./Services";
import About from "./About";
import Work from "./Work";
import References from "./References";
import Contact from "./Contact";

export default function Home() {

    return (
        <>
            <Intro />
            <Services />
            <About />
            <Work />
            <References />
        </>
    );
}