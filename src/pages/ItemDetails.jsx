import { Link, useParams } from "react-router-dom";
import { useItems } from "../hooks/useItems";
import "./FormPages.css";

function ItemDetails() {
  const { id } = useParams();
  const { items } = useItems();
  const item = items.find(x => String(x.id) === id);

  if (!item) {
    return (
      <div className="form-page">
        <div className="form-card">
          <h1>Item not found</h1>
          <Link className="primary-btn" to="/">Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="details-card">
        <span className={item.type === "LOST" ? "detail-badge lost" : "detail-badge found"}>
          {item.type}
        </span>
        <p className="eyebrow">{item.category}</p>
        <h1>{item.title}</h1>
        <p className="details-description">{item.description}</p>
        <div className="detail-list">
          <p>📍 <strong>Location:</strong> {item.location}</p>
          <p>📅 <strong>Date:</strong> {item.date}</p>
          <p>● <strong>Status:</strong> {item.status}</p>
          {item.contact && <p>📞 <strong>Contact:</strong> {item.contact}</p>}
        </div>
        <Link to="/login" className="primary-btn">Login to Claim / Contact</Link>
      </div>
    </div>
  );
}
export default ItemDetails;