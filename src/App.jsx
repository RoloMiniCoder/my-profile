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
import Blog from './pages/Blog';

function Quote() {
  const { data: quote, isLoading, error } = useDataPollingFetching(`/quotes`);

  return (
    <div id='quote'>
      {quote && (
        <blockquote>
          <p>{quote}</p>
        </blockquote>
      )}
    </div>)
}

function App() {

  return (
    <Router>
      <Quote />
      <header>
        <nav>
          <div>
            <ul id='top-nav'>
              <Link to="/aboutme" className='link'>
                <li>
                  ABOUT ME
                </li>
              </Link>
              <Link to="/blog" className='link'>
                <li>
                  BLOG
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

      <div id="body">
        <div id="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/music" element={<Music />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<div><h2>404 - Page Not Found</h2><p>Please use the navigation above.</p></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;