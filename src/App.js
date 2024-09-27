import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Drawer from "../src/components/Drawer";
import data from "./data.json";

import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";

function App() {
  const [items, setItems] = React.useState(data);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  const onAddToCart = (obj) => {
    if (!cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems([...cartItems, obj]); 
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorites = (obj) => {
    if (!favorites.find((item) => item.id === obj.id)) {
      setFavorites([...favorites, obj]);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={removeFromCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorites={onAddToFavorites} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
