import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects'
import Music from './pages/Music';
import Gaming from './pages/Gaming';


function App() {
  const [quote, setQuote] = useState('');

  async function fetchQuote() {
    const quote = await fetch(`http://localhost:3001/api/quotes`).then(res => res.json())
    return quote.quote
  }

  async function handleClick() {
    const quote = await fetchQuote();
    setQuote(quote);
  }

  useEffect(() => {
    (async () => {
      const quote = await fetchQuote()
      setQuote(quote)
    })()
  }, [])

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
      <div id='quote' onClick={handleClick}>
        <p>{quote}</p>
      </div>
      <header>
        <nav>
          <ul id='top-nav'>
            <li>
              <Link to="/details" className='link'>
                About me
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
          <Route path="/details" element={<AboutMe />} />
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