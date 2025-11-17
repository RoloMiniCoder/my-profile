import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import useDataPollingFetching from './hooks/useDataPollingFetching';

import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects'
import Music from './pages/Music';
import Gaming from './pages/Gaming';
import DataStateWrapper from './components/DataStateWrapper';


function App() {
  const { data: quote, isLoading, error } = useDataPollingFetching(`/quotes`);

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
      <DataStateWrapper isLoading={isLoading} error={error}>
        {quote && (<div id='quote'>
          <blockquote>{quote}</blockquote>
        </div>)}
      </DataStateWrapper>
      <header>
        <nav>
          <div className='content'>
            <ul id='top-nav'>
              <Link to="/aboutme" className='link'>
                <li>
                  ABOUT ME
                </li>
              </Link>
              <Link to="/music" className='link'>
                <li>
                  LISTENING TO
                </li>
              </Link>
              <Link to="/gaming" className='link'>
                <li>
                  GAMING
                </li>
              </Link>
              <Link to="/projects" className='link'>
                <li>
                  PROJECTS
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>

      <div id="content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/aboutme" element={<AboutMe />} />
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