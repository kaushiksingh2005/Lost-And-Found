import { Link } from "react-router-dom";
import { useState } from "react";
import { useItems } from "../hooks/useItems";
import ItemCard from "../components/ItemCard";
import "./Home.css";

function Home() {
  const { items } = useItems();
  const [search, setSearch] = useState("");

  const recentItems = items
    .filter((item) =>
      `${item.title} ${item.category} ${item.location}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .slice(0, 4);

  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">SMART CAMPUS LOST & FOUND</p>
            <h1>Lost something? <span>Let's find it.</span></h1>
            <p className="hero-text">
              Report lost belongings, discover found items, and help your campus
              community return things to their rightful owners.
            </p>
            <div className="hero-buttons">
              <Link to="/report-lost" className="primary-btn">Report Lost Item</Link>
              <Link to="/found-items" className="secondary-btn">Browse Found Items</Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">🎒</div>
            <h3>One place for campus belongings</h3>
            <p>Search by item, category, or campus location.</p>
            <div className="mini-stat"><strong>{items.length}+</strong><span>total reports</span></div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE</p>
            <h2>Find an item</h2>
            <p>Search through recently reported campus items.</p>
          </div>
          <Link to="/lost-items" className="text-link">View all →</Link>
        </div>

        <div className="search-box">
          <span>🔎</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search wallet, ID card, Block A..."
          />
        </div>

        <div className="items-grid">
          {recentItems.map((item) => <ItemCard key={item.id} item={item} />)}
        </div>

        {recentItems.length === 0 && <div className="empty">No matching items found.</div>}
      </section>

      <section className="how-section">
        <div className="section-heading centered">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Simple. Fast. Campus-friendly.</h2>
        </div>
        <div className="steps">
          <div className="step"><span>1</span><h3>Report</h3><p>Tell the campus what you lost or found.</p></div>
          <div className="step"><span>2</span><h3>Search</h3><p>Browse reports and identify a matching item.</p></div>
          <div className="step"><span>3</span><h3>Reconnect</h3><p>Use the details to safely return the item.</p></div>
        </div>
      </section>
    </div>
  );
}

export default Home;