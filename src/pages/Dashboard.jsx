import { Link } from "react-router-dom";
import { useItems } from "../hooks/useItems";
import "./Dashboard.css";

function Dashboard() {
  const { items } = useItems();

  return (
    <div className="dashboard">
      <div className="dashboard-head">
        <div>
          <p className="eyebrow">STUDENT DASHBOARD</p>
          <h1>My Dashboard</h1>
          <p>Your reports are currently stored in browser localStorage.</p>
        </div>
        <Link to="/report-lost" className="primary-btn">+ New Report</Link>
      </div>

      <div className="stats">
        <div><span>Total Reports</span><strong>{items.length}</strong></div>
        <div><span>Lost</span><strong>{items.filter(x => x.type === "LOST").length}</strong></div>
        <div><span>Found</span><strong>{items.filter(x => x.type === "FOUND").length}</strong></div>
      </div>

      <div className="dashboard-card">
        <h2>Recent Reports</h2>
        {items.map(item => (
          <div className="report-row" key={item.id}>
            <img src={item.image} alt="" />
            <div><strong>{item.title}</strong><span>{item.location} • {item.date}</span></div>
            <span className={item.type === "LOST" ? "row-lost" : "row-found"}>{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;