import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start"

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
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

    </HashRouter>
  );
}
