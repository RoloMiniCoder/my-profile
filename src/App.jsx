import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import useDataPollingFetching from './hooks/useDataPollingFetching';

import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects'
import Music from './pages/Music';
import Gaming from './pages/Gaming';
import Blog from './pages/Blog';
import NowPlaying from './components/NowPlaying/NowPlaying'

function Quote() {
  const { data, isLoading, error } = useDataPollingFetching(`/quotes`);

  return (
    <div id='quote'>
      {data && (
        <blockquote>
          <p>{data.quote}</p>
        </blockquote>
      )}
    </div>)
}

function Button({ buttonText, linkTo }) {

  const pathname = useLocation().pathname;
  const isActive = pathname === linkTo;

  return (
    <Link to={linkTo}>
      <button type='button' className={`link-button ${isActive ? 'active' : ''}`}>
        {buttonText}
      </button>
    </Link>
  )
}

function App() {
  return (
    <>
      <NowPlaying />
      <div id='header'>
        <h1 id='title'>Martelation Station</h1>
        <Quote />
      </div>
      <BrowserRouter>
        <nav id='top-nav'>
          <Button buttonText='ABOUT ME' linkTo='/aboutme' />
          <Button buttonText='BLOG' linkTo='/blog' />
          <Button buttonText='LISTENING TO' linkTo='/music' />
          <Button buttonText='GAMING' linkTo='/gaming' />
          <Button buttonText='PROJECTS' linkTo='/projects' />
        </nav>

        <main id="body">
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
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;