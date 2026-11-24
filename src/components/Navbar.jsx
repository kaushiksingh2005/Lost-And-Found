import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">🔎</span>
          <span>Campus<span>Find</span></span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/lost-items" className={linkClass}>Lost Items</NavLink>
          <NavLink to="/found-items" className={linkClass}>Found Items</NavLink>
          <NavLink to="/report-lost" className={linkClass}>Report Lost</NavLink>
          <NavLink to="/report-found" className={linkClass}>Report Found</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-link">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;