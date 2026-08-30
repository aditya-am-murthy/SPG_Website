import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './pages/shared.css';
import Nav    from './components/Nav';
import Footer from './components/Footer';

import Home        from './pages/Home';
import About       from './pages/About';
import Leadership  from './pages/Leadership';
import Programs    from './pages/Programs';
import Projects    from './pages/Projects';
import Blog        from './pages/Blog';
import BlogPost    from './pages/BlogPost';
import GetInvolved from './pages/GetInvolved';
import Contact     from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/leadership"   element={<Leadership />} />
          <Route path="/programs"     element={<Programs />} />
          <Route path="/projects"     element={<Projects />} />
          <Route path="/blog"         element={<Blog />} />
          <Route path="/blog/:slug"   element={<BlogPost />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact"      element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
