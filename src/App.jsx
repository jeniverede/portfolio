import './App.css';
import { Route, Routes } from "react-router-dom";

/* components imports */
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* page/components imports */
import MuseumGuideBerlin from "./components/MuseumGuideBerlin";
import TierheimBerlin from './components/TierheimBerlin';
import SecondhandShadows from './components/SecondhandShadows';

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/museumguideberlin" element={<MuseumGuideBerlin />} />
        <Route path="/tierheimberlin" element={<TierheimBerlin />} />
        <Route path="/secondhandshadows" element={<SecondhandShadows />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Contact />
      <Footer />
    </>
  );

}

export default App;
