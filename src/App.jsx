import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';
import Projects from './components/Projects'
import Music from './components/Music';
import Gaming from './components/Gaming';


function App() {
  return (
    <Router>
      <div id='media-player'>
        <iframe src="https://embed.tidal.com/tracks/164541"
          width="500"
          height="120"
          allow="encrypted-media; fullscreen; clipboard-write https://embed.tidal.com; web-share"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          style={{ colorScheme: "light dark", border: 'none' }}
          title="TIDAL Embed Player" />
      </div>
      <header >
        <nav>
          <ul id='top-nav'>
            <li>
              <Link to="/" className='link'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/details" className='link'>
                My Details
              </Link>
            </li>
            <li>
              <Link to="/music" className='link'>
                Stuff I listen to
              </Link>
            </li>
            <li>
              <Link to="/gaming" className='link'>
                What I've been playing
              </Link>
            </li>
            <li>
              <Link to="/projects" className='link'>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/music" element={<Music />} />
          <Route path="*" element={<div><h2>404 - Page Not Found</h2><p>Please use the navigation above.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;