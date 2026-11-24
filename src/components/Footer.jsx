import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">🔎 CampusFind</div>
          <p>Helping students reconnect with their lost belongings on campus.</p>
        </div>
        <div className="footer-links">
          <Link to="/lost-items">Lost Items</Link>
          <Link to="/found-items">Found Items</Link>
          <Link to="/report-lost">Report Lost</Link>
          <Link to="/report-found">Report Found</Link>
        </div>
      </div>
      <div className="footer-bottom">© 2026 CampusFind • Smart Campus Lost & Found</div>
    </footer>
  );
}

export default Footer;