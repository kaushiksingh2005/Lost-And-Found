import { useState } from "react";
import { useItems } from "../hooks/useItems";
import { useNavigate } from "react-router-dom";
import "./ReportForm.css";

function ReportForm({ type }) {
  const { addItem } = useItems();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    location: "",
    date: "",
    description: "",
    contact: "",
    image: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem({
      title: form.title,
      category: form.category,
      location: form.location,
      date: form.date,
      description: form.description,
      contact: form.contact,
      image: form.image,
      type
    });

    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({
      title: "",
      category: "",
      location: "",
      date: "",
      description: "",
      contact: "",
      image: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <p className="eyebrow">CAMPUS REPORT</p>
        <h1>Report {type === "LOST" ? "a Lost" : "a Found"} Item</h1>
        <p className="form-intro">
          Fill in the details and submit. The item will immediately appear in
          the Lost/Found list and is also saved in your browser.
        </p>

        {submitted ? (
          <div className="success-box">
            <div>✅</div>
            <h2>Report added successfully!</h2>
            <p>Your item is now visible in the portal.</p>
            <button
              className="primary-btn"
              onClick={() => navigate(type === "LOST" ? "/lost-items" : "/found-items")}
            >
              View {type === "LOST" ? "Lost" : "Found"} Items
            </button>
            <button className="secondary-btn form-secondary" onClick={resetForm}>
              Add Another Item
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="two-col">
              <label>
                Item name
                <input name="title" value={form.title} onChange={handleChange} required placeholder="e.g. Black Wallet" />
              </label>

              <label>
                Category
                <select name="category" value={form.category} onChange={handleChange} required>
                  <option value="" disabled>Select category</option>
                  <option>Electronics</option>
                  <option>Wallet</option>
                  <option>ID Card</option>
                  <option>Bag</option>
                  <option>Keys</option>
                  <option>Books</option>
                  <option>Documents</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <div className="two-col">
              <label>
                Location
                <input name="location" value={form.location} onChange={handleChange} required placeholder="e.g. Central Library" />
              </label>

              <label>
                Date
                <input name="date" value={form.date} onChange={handleChange} required type="date" />
              </label>
            </div>

            <label>
              Description
              <textarea name="description" value={form.description} onChange={handleChange} required rows="5" placeholder="Describe the item, color, model, identifying marks..."></textarea>
            </label>

            <label>
              Contact information
              <input name="contact" value={form.contact} onChange={handleChange} required placeholder="Email or phone number" />
            </label>

            <label>
              Image URL <span style={{fontWeight: 400, color: "#94a3b8"}}>(optional)</span>
              <input name="image" value={form.image} onChange={handleChange} placeholder="https://example.com/item.jpg" />
            </label>

            <button className="primary-btn" type="submit">
              Submit {type === "LOST" ? "Lost" : "Found"} Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ReportForm;