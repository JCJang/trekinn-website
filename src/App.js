import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Landing from './components/pages/Landing.js';

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
      <Route path="/" exact element={<Landing/>}>
      </Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  </Router>

  );
}

export default App;
