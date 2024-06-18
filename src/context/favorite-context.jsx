// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

// eslint-disable-next-line react/prop-types
export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addFavoriteItem = (item) => {
    setFavoriteItems([...favoriteItems, item]);
  };

  const removeFavoriteItem = (item) => {
    setFavoriteItems(favoriteItems.filter((i) => i.id !== item.id));
  };

  const contextValue ={
        favoriteItems,
        addFavoriteItem,
        removeFavoriteItem
  }

  return (
    <FavoriteContext.Provider
      value={ contextValue }
    >
      {children}
    </FavoriteContext.Provider>
  );
};
