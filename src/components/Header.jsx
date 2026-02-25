import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
              <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Start</Link>
        <Link to="/about">Om mig</Link>
        <Link to="/projects">Passion Projects</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
        </div>
    )
}

export default Header;