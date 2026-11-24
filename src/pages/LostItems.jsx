import { useMemo, useState } from "react";
import { useItems } from "../hooks/useItems";
import ItemCard from "../components/ItemCard";
import "./Listing.css";

function LostItems() {
  const { items } = useItems();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => items.filter(item =>
    item.type === "LOST" &&
    `${item.title} ${item.category} ${item.location}`
      .toLowerCase()
      .includes(query.toLowerCase())
  ), [items, query]);

  return (
    <div className="listing-page">
      <div className="page-head">
        <p className="eyebrow">CAMPUS REPORTS</p>
        <h1>Lost Items</h1>
        <p>Browse items reported lost around campus.</p>
      </div>
      <input
        className="listing-search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search lost items..."
      />
      <div className="items-grid">
        {filtered.map(item => <ItemCard key={item.id} item={item} />)}
      </div>
      {filtered.length === 0 && <div className="empty">No lost items match your search.</div>}
    </div>
  );
}

export default LostItems;