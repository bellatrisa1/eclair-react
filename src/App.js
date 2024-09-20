import React from "react";
import Card from "./components/Card";
import Header from "../src/components/Header";
import Drawer from "../src/components/Drawer";
import data from "./data.json";

console.log(data);

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    setItems(data);
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  // console.log(cartItems);

  const onChangeSearchInput = (event) => {
    // console.log();
    setSearchValue(event.target.value);
  };

  const removeFromCart = (id) => {
    // console.log(id); 
    setCartItems((prev) => prev.filter(items => items.id !== id));
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
      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1>
            {searchValue ? `Поиск по запросу: "${searchValue}"` : "АССОРТИМЕНТ"}
          </h1>
          <div className="search-block d-flex">
            <img
              className="image_search"
              src="../img/search.svg"
              alt="Search"
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="../img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onClick={() => console.log(items)}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
