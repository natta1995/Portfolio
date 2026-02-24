import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
              <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Start</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
        </div>
    )
}

export default Header;