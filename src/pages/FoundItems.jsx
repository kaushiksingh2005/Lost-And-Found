import { useMemo, useState } from "react";
import { useItems } from "../hooks/useItems";
import ItemCard from "../components/ItemCard";
import "./Listing.css";

function FoundItems() {
  const { items } = useItems();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => items.filter(item =>
    item.type === "FOUND" &&
    `${item.title} ${item.category} ${item.location}`
      .toLowerCase()
      .includes(query.toLowerCase())
  ), [items, query]);

  return (
    <div className="listing-page">
      <div className="page-head">
        <p className="eyebrow">CAMPUS REPORTS</p>
        <h1>Found Items</h1>
        <p>Browse items found by students and staff.</p>
      </div>
      <input
        className="listing-search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search found items..."
      />
      <div className="items-grid">
        {filtered.map(item => <ItemCard key={item.id} item={item} />)}
      </div>
      {filtered.length === 0 && <div className="empty">No found items match your search.</div>}
    </div>
  );
}

export default FoundItems;