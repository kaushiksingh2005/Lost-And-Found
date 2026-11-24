import { Link } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <article className="item-card">
      <div className="item-image">
        <img src={item.image} alt={item.title} />
        <span className={item.type === "LOST" ? "lost-badge" : "found-badge"}>
          {item.type}
        </span>
      </div>
      <div className="item-content">
        <p className="item-category">{item.category}</p>
        <h3>{item.title}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-info">
          <span>📍 {item.location}</span>
          <span>📅 {item.date}</span>
        </div>
        <Link to={`/item/${item.id}`} className="view-btn">View Details →</Link>
      </div>
    </article>
  );
}

export default ItemCard;