import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">🔎</div>
        <h1>Welcome back</h1>
        <p>Login to manage your campus reports.</p>
        <form onSubmit={e => e.preventDefault()}>
          <label>Email<input type="email" placeholder="you@college.edu" required /></label>
          <label>Password<input type="password" placeholder="••••••••" required /></label>
          <button className="primary-btn" type="submit">Login</button>
        </form>
        <div className="auth-footer">Don't have an account? <Link to="/register">Register</Link></div>
      </div>
    </div>
  );
}
export default Login;