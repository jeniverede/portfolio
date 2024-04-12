/* deployed on Netlify branch dev */
import './App.css';
import './Typography.css';
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
import CollectionDigital from './components/CollectionDigital';
import BrightStoneCeramics from './components/BrightStoneCeramics';
import MourningMemoryMemento from './components/MourningMemoryMemento';
import GithubPortfolio from './components/GithubPortfolio';

function App() {

  return (
    <>
      <div className='center'>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/museumguideberlin" element={<MuseumGuideBerlin />} />
          <Route path="/tierheimberlin" element={<TierheimBerlin />} />
          <Route path="/secondhandshadows" element={<SecondhandShadows />} />
          <Route path="/collectiondigital" element={<CollectionDigital />} />
          <Route path="/brightstoneceramics" element={<BrightStoneCeramics />} />
          <Route path="/mourning-memory-memento" element={<MourningMemoryMemento />} />
          <Route path="/githubportfolio" element={<GithubPortfolio />} />
        </Routes>

        <Contact />
        <Footer />
      </div>
    </>
  );

}

export default App;
