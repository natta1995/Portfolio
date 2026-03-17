import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ProjectPage from "./pages/projects";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
