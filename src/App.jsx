import './App.css';
import './Typography.css';
// import { Route, Routes } from "react-router-dom"; // commented out for now

// /* components imports */
// import Nav from "./components/Nav";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import NotFound from "./components/NotFound";
// import { BackToTop } from './components/BackToTop';

// /* page/components imports */
// import MuseumGuideBerlin from "./components/MuseumGuideBerlin";
// import TierheimBerlin from './components/TierheimBerlin';
// import SecondhandShadows from './components/SecondhandShadows';
// import CollectionDigital from './components/CollectionDigital';
// import BrightStoneCeramics from './components/BrightStoneCeramics';
// import MourningMemoryMemento from './components/MourningMemoryMemento';
// import GithubPortfolio from './components/GithubPortfolio';
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import Impressum from "./components/Impressum";
// import Resume from "./components/Resume";

import ComingSoon from './components/ComingSoon';

function App() {
  // Temporary coming soon page
  return <ComingSoon />;

  /*
  // Original app code (kept for future)
  return (
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
      <Footer />
      <BackToTop/>
    </div>
  );
  */
}

export default App;


