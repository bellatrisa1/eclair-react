import Card from "./components/Card";
import Header from "../src/components/Header";
import Drawer from "../src/components/Drawer";

const arr = [
  {
    title: "Эклер 'Голубика-лаванда' Dé fleur éclair",
    price: 299,
    imageUrl: "../img/eclair/1.jpeg",
  },
  {
    title: "Эклер 'Малина' Dé fleur éclair",
    price: 259,
    imageUrl: "../img/eclair/2.jpeg",
  },
  {
    title: "Эклер 'Попкорн' Dé fleur éclair",
    price: 310,
    imageUrl: "../img/eclair/3.jpeg",
  },
  {
    title: "Эклер 'Соленая карамель' Dé fleur éclair",
    price: 220,
    imageUrl: "../img/eclair/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1>Ассортимент</h1>
          <div className="search-block d-flex">
            <img
              className="image_search"
              src="../img/search.svg"
              alt="Search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
