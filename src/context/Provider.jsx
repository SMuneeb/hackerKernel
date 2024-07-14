import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const Provider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <UserContext.Provider value={{ items, setItems }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
