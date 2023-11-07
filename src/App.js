import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Make sure this import is correct
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formations from './components/Formations';
import Accueil from "./components/Acceuil";
import Experiences from "./components/Experiences";
import Projets from "./components/Projets";
import Certifications from "./components/Certifications";
import picture from "../src/pictures/My pic.jpg";
import cvqr from "../src/pictures/CVQR.png";
import Footer from "./components/Footer";


function App() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = {
    color: '#312E2D',
    textDecoration: 'none',
    borderRadius: '100%',
    display: 'inline-block',
    width: '18%',
    height: '100%',
    backgroundColor: '#D9D9D9',
    textAlign: 'center',
    lineHeight: '200%',
  };

  const linkStyleHovered = {
    ...linkStyle,
    color: '#D9D9D9', // Change the color when hovered
    backgroundColor: '#312E2D', // Change the background color when hovered
  };

  return (
    <BrowserRouter>
      <div className="container-fluid" style={{ background: 'radial-gradient(circle at center, #FFFFFF, #D9D9D9)' }}>
        <div className="row justify-content-start">
          <div className="col-md-4" style={{ textAlign: 'left', padding: '20px' }}>
            <pre className="card-subtitle mb-2">
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />+212-666968243
            </pre>
            <pre className="card-subtitle mb-2">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />bakarouhajar1@gmail.com
            </pre>
            <pre className="card-subtitle mb-2">
              <a href="https://www.linkedin.com/in/hajar-bakarou-655521233" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="black" style={{ marginRight: "10px" }} />bakarou-hajar-linkedin
              </a>
            </pre>
            <pre className="card-subtitle mb-2">
              <a href="https://github.com/bakarouhajar" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} color="black" style={{ marginRight: "10px" }} />bakarou-hajar-github
              </a>
            </pre>
            <pre class="card-subtitle mb-2">
              <FontAwesomeIcon icon={faMapMarker} color="black" style={{ marginRight: "10px" }} />Marrakech, Maroc
            </pre>
            <pre class="card-subtitle mb-2">
              <FontAwesomeIcon icon={faGlobe} color="black" style={{ marginRight: "10px" }} />Mobilité : Globale
            </pre>
          </div>
          <div className="col-md-4 text-center">
            <div className="row justify-content-center">
              <img src={picture} className="rounded-circle img-fluid" alt="img" style={{ height: '130px', width: '140px' }} />
            </div>
            <div className="row">
              <h1 style={{ color: '#2e1a15' }}>BAKAROU Hajar</h1>
            </div>
            <div className="row">
              <h5 style={{ color: '#2e1a15' }}><i>Future ingénieure en informatique et réseaux</i></h5>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="row justify-content-end mt-2">
              <img src={cvqr} alt="LinkedIn QR Code" style={{ width: '30%', height: '30%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-around">
        <nav className="navbar navbar-light bg-light" style={{ padding: '3%' }}>
          <Link to="/" style={hoveredLink === "Accueil" ? linkStyleHovered : linkStyle} onMouseEnter={() => setHoveredLink("Accueil")} onMouseLeave={() => setHoveredLink(null)}><b>Accueil</b></Link>
          <Link to="/formations" style={hoveredLink === "Formations" ? linkStyleHovered : linkStyle} onMouseEnter={() => setHoveredLink("Formations")} onMouseLeave={() => setHoveredLink(null)}><b>Formations</b></Link>
          <Link to="/experiences" style={hoveredLink === "Experiences" ? linkStyleHovered : linkStyle} onMouseEnter={() => setHoveredLink("Experiences")} onMouseLeave={() => setHoveredLink(null)}><b>Expériences</b></Link>
          <Link to="/projets" style={hoveredLink === "Projets" ? linkStyleHovered : linkStyle} onMouseEnter={() => setHoveredLink("Projets")} onMouseLeave={() => setHoveredLink(null)}><b>Projets</b></Link>
          <Link to="/certifications" style={hoveredLink === "Certifications" ? linkStyleHovered : linkStyle} onMouseEnter={() => setHoveredLink("Certifications")} onMouseLeave={() => setHoveredLink(null)}><b>Certifications</b></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
      <div className="row">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
