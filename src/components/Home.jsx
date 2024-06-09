/* Home imports components and exports to App.jsx */
import Intro from "./Intro";
import Services from "./Services";
import About from "./About";
import Work from "./Work";
import References from "./References";

export default function Home() {

    return (
        <>
            <div id="home">
                <Intro />
                <Services />
                <About />
                <Work />
                <References />
            </div>
        </>
    );
}