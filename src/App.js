import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import BannerHome from './components/home/Home';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import CV from './components/cv/Cv';
import Procurement from './components/projects/procurement/Procurement';
import './App.css';

function MainPage() {
  // This is your existing homepage with sections
  return (
    <>
      <Header />
      <BannerHome />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/captaincheq">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/Procurement" element={<Procurement />} />
      </Routes>
    </Router>
  );
}

export default App;
