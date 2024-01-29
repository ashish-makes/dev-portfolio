import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from './components/Resources';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          {/* Add the catch-all route for 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
