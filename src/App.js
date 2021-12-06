import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Landing from './components/pages/Landing.js';
import About from './components/pages/About.js';
import Rooms from './components/pages/Rooms.js';
import DestinationsAndMap from './components/pages/DestinationsAndMap.js';
import Destinations from './components/pages/Destinations.js';
import Map from './components/pages/Map.js';
import Contact from './components/pages/Contact.js';

import './App.css';

//import fonts
import "./fonts/Genseki/GenSekiGothicTW-B-01.woff"
import "./fonts/Genseki/GenSekiGothicTW-H-01.woff"
import "./fonts/Genseki/GenSekiGothicTW-L-01.woff"
import "./fonts/Genseki/GenSekiGothicTW-M-01.woff"
import "./fonts/Genseki/GenSekiGothicTW-R-01.woff"

import "./fonts/Genwan/GenWanMinTW-EL-01.woff"
import "./fonts/Genwan/GenWanMinTW-L-01.woff"
import "./fonts/Genwan/GenWanMinTW-M-01.woff"
import "./fonts/Genwan/GenWanMinTW-R-01.woff"
import "./fonts/Genwan/GenWanMinTW-EL-01.woff"

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Landing/>}></Route>
      <Route path="/about" exact element={<About/>}></Route>
      <Route path="/rooms" exact element={<Rooms/>}></Route>
      <Route path="/destinations+map" exact element={<DestinationsAndMap/>}></Route>
      <Route path="/destinations" exact element={<Destinations/>}></Route>
      <Route path="/map" exact element={<Map/>}></Route>
      <Route path="/contact" exact element={<Contact/>}></Route>

    </Routes>
  </Router>

  );
}

export default App;
