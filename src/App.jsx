import { HashRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import StartPage from "./pages/Start"
import AbsoutPage from "./pages/About";
import ProjectPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <HashRouter>

    <Header />

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<AbsoutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

    </HashRouter>
  );
}
