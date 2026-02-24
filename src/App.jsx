import { HashRouter, Routes, Route, Link } from "react-router-dom";
//import './App.css'
import StartPage from './pages/start'
import AbsoutPage from "./pages/about";
import ProjectPage from "./pages/projects";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <HashRouter>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Start</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<AbsoutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}
