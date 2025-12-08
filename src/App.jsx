import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';

// Page imports
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects'
import Music from './pages/Music';
import Gaming from './pages/Gaming';
import Blog from './pages/Blog';
import NowPlaying from './components/NowPlaying/NowPlaying'

// Component imports
import Quote from './components/Quote';
import NowPlaying from './components/NowPlaying'

// Style imports
import './App.css'


function Button({ buttonText, linkTo }) {

  const pathname = useLocation().pathname;
  const isActive = pathname === linkTo;

  return (
    <Link to={linkTo}>
      <button type='button' className={`topnav__button ${isActive ? 'topnav__button--active' : ''}`}>
        {buttonText}
      </button>
    </Link>
  )
}

function App() {
  return (
    <>
      <div className='header'>
        <NowPlaying />
        <h1 className='header__title'>Martelation Station</h1>
        <Quote />
      </div>
      <BrowserRouter>
        <nav className='topnav'>
          <div className='topnav_buttons'>
            <Button buttonText='ABOUT ME' linkTo='/aboutme' />
            <Button buttonText='BLOG' linkTo='/blog' />
            <Button buttonText='LISTENING TO' linkTo='/music' />
            <Button buttonText='GAMING' linkTo='/gaming' />
            <Button buttonText='PROJECTS' linkTo='/projects' />
          </div>
        </nav>

        <main className="body">
          <div className="body__content">
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