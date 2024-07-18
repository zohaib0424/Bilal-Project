/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";

import FAQ from "./views/FAQ";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./views/About";
import Collection from "./views/Collections";
import Benifits from "./views/Benifits";
import Mint from "./views/Mint";

import { Team } from "./views/Team";
import Spacer from "./components/Spacer";
import RoadMap from "./views/Roadmap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header2 from "./components/Header2";
import ParticlesView from "./components/ParticlesView";
function Main() {
  return (
    <>
      {/* <Reveal bottom> */}

      <Header />
      {/* </Reveal> */}
      {/* <div> */}
      {/* <ParticlesView type="bubbles"/> */}
      <Collection />
      {/* <Spacer/>   */}
      <About />
      {/* <Spacer/>   */}
      {/* <Spacer/> */}
      <Benifits />
      <RoadMap />
      {/* <Spacer/> */}
      {/* <div> */}
      {/* <ReactRain
          numDrops="500"
          
        /> */}
      <Team />
      <FAQ />
      {/* </div> */}
      {/* </div> */}
      {/* <Footer/> */}
      <Footer />
    </>
  );
}

function MintScreen() {
  return (
    <>
      <Header2 />
      {/* <ParticlesView type="bubbles"/> */}
      <Mint />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/mint" element={<MintScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
