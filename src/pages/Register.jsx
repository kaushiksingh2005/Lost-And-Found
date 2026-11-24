import { Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">✨</div>
        <h1>Create account</h1>
        <p>Join your campus lost & found community.</p>
        <form onSubmit={e => e.preventDefault()}>
          <label>Full Name<input placeholder="Your name" required /></label>
          <label>College Email<input type="email" placeholder="you@college.edu" required /></label>
          <label>Password<input type="password" placeholder="Create a password" required /></label>
          <button className="primary-btn" type="submit">Create Account</button>
        </form>
        <div className="auth-footer">Already registered? <Link to="/login">Login</Link></div>
      </div>
    </div>
  );
}
export default Register;