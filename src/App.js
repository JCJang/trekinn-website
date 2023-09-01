import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Landing from './components/pages/Landing.js';
import About from './components/pages/About.js';
import Rooms from './components/pages/Rooms.js';
import DestinationsAndMap from './components/pages/DestinationsAndMap.js';
import Contact from './components/pages/Contact.js';

import {FourBedroomPeakPrice, FourBedroomOffpeakPrice, TwoBedroomPeakPrice, TwoBedroomOffpeakPrice} from './EDITME/Prices.js';
import {Announcements} from './EDITME/Announcements.js';
//
import './App.css';
//
// //import fonts
// import "./fonts/Genseki/GenSekiGothicTW-B-01.woff"
// import "./fonts/Genseki/GenSekiGothicTW-H-01.woff"
// import "./fonts/Genseki/GenSekiGothicTW-L-01.woff"
// import "./fonts/Genseki/GenSekiGothicTW-M-01.woff"
import "./fonts/Genseki/GenSekiGothicTW-R-01.woff2"
import "./fonts/Genseki/GenSekiGothicTW-R-01.woff"
//
// import "./fonts/Genwan/GenWanMinTW-EL-01.woff"
// import "./fonts/Genwan/GenWanMinTW-L-01.woff"
// import "./fonts/Genwan/GenWanMinTW-M-01.woff"
import "./fonts/Genwan/GenWanMinTW-R-01.woff"
import "./fonts/Genwan/GenWanMinTW-SB-01.woff"
import "./fonts/Genwan/GenWanMinTW-R-01.woff2"
import "./fonts/Genwan/GenWanMinTW-SB-01.woff2"
import { useTranslation } from 'react-i18next'; // Assuming you are using react-i18next

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Landing/>}></Route>
      <Route path="/about" exact element={<About/>}></Route>
      <Route path="/rooms" exact element={<Rooms
         Announcements = {Announcements}
         FourBedroomPeakPrice={FourBedroomPeakPrice} FourBedroomOffpeakPrice={FourBedroomOffpeakPrice} TwoBedroomPeakPrice={TwoBedroomPeakPrice} TwoBedroomOffpeakPrice={TwoBedroomOffpeakPrice}/>}></Route>
      <Route path="/destinations+map" exact element={<DestinationsAndMap/>}></Route>
      <Route path="/contact" exact element={<Contact/>}></Route>

    </Routes>
  </Router>

  );
}

export default App;
