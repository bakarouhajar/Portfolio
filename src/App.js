import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formations from "./components/Formations";
import Accueil from "./components/Acceuil";
import Experiences from "./components/Experiences";
import Projets from "./components/Projets";
import Certifications from "./components/Certifications";
import picture from "../src/pictures/My pic.jpg"
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div class="container-fluid">
        <div class="row justify-content-around  " style={{background: 'radial-gradient(circle, white , #ede0d3' }}> 
            <img src={picture} class="rounded-circle img-fluid " style={{height:'200px', width: '200px' }}/>
        </div>
        <div class="row   " style={{background: 'radial-gradient(circle, white , #ede0d3' }}> 
            <h1 style={{textAlign: 'center'}} color="#2e1a15">BAKAROU Hajar</h1>
        </div>
        <div class="row   " style={{background: 'radial-gradient(circle, white , #ede0d3' }}> 
            <h5 style={{textAlign: 'center'}} color="#2e1a15"><i>Future ingénieure en informatique et réseaux</i></h5>
        </div>
        <div class="row justify-content-around  ">
          <nav class="navbar navbar-light bg-light" style={{padding:'40px'}}>
            
                <Link to="/"  style={{color: '#a5725f' ,  textDecoration: "none" , borderRadius: "50%", display: "inline-block", width: "100px", height: "30px", backgroundColor: "#ede0d3", textAlign: "center", lineHeight: "30px" }}><b>Accueil</b></Link>
              
                <Link to="/formations" style={{color: '#a5725f' ,  textDecoration: "none" , borderRadius: "50%", display: "inline-block", width: "100px", height: "30px", backgroundColor: "#ede0d3", textAlign: "center", lineHeight: "30px"}}><b>Formations</b></Link>

                <Link to="/certifications" style={{color: '#a5725f' ,  textDecoration: "none" , borderRadius: "50%", display: "inline-block", width: "100px", height: "30px", backgroundColor: "#ede0d3", textAlign: "center", lineHeight: "30px"}}><b>Certifications</b></Link>

                <Link to="/projets" style={{color: '#a5725f' ,  textDecoration: "none" , borderRadius: "50%", display: "inline-block", width: "100px", height: "30px", backgroundColor: "#ede0d3", textAlign: "center", lineHeight: "30px"}}><b>Projets</b></Link>

                <Link to="/experiences" style={{color: '#a5725f' ,  textDecoration: "none" , borderRadius: "50%", display: "inline-block", width: "100px", height: "30px", backgroundColor: "#ede0d3", textAlign: "center", lineHeight: "30px"}}><b>Expériences</b></Link>
              
              
              
          </nav>

          <Route path="/" exact component={Accueil} />
          <Route path="/formations" component={Formations} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/projets" component={Projets} />
          <Route path="/experiences" component={Experiences} />

        </div>
        <div class="row">
          <Footer/>
        </div>
      </div>
    </Router>
  );
}
export default App