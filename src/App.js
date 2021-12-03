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
<div>
    <Landing/>

    <div className="bg-warm-lightest text-purple-500 genseki">
你好
    </div>
    <div className="bg-warm-lightest text-purple-500 genwan">
你好
    </div>
    </div>
  );
}

export default App;
