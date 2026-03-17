import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navLink = (path, label) => {
    const isActive = location.pathname === path;

    return (
      <Link
        to={path}
        className={`text-sm transition-colors ${
          isActive
            ? "text-zinc-900 font-medium"
            : "text-zinc-600 hover:text-zinc-900"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        
        {/* Logo / Namn */}
        <Link
          to="/"
          className="text-sm font-medium tracking-tight text-zinc-900"
        >
         Natalie Hällerdal
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navLink("/", "Start")}
          {navLink("/projects", "Projekt")}
          {navLink("/about", "Om mig")}
          {navLink("/contact", "Kontakt")}
          
        </nav>
      </div>
    </header>
  );
};

export default Header;