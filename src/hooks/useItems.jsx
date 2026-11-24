import { createContext, useContext, useEffect, useState } from "react";
import initialItems from "../data/items";

const ItemsContext = createContext(null);
const STORAGE_KEY = "campusfind_items";

export function ItemsProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialItems;
    } catch {
      return initialItems;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    const item = {
      ...newItem,
      id: Date.now(),
      status: "Active",
      date: newItem.date
        ? new Date(newItem.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
          })
        : "Not specified",
      image:
        newItem.image ||
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
    };

    setItems((current) => [item, ...current]);
    return item;
  };

  const removeItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const resetItems = () => {
    setItems(initialItems);
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem, resetItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("useItems must be used inside ItemsProvider");
  }

  return context;
}
