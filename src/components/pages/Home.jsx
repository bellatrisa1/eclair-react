import Card from "../Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorites,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {" "}
          {searchValue
            ? `Поиск по запросу: "${searchValue}"`
            : "АССОРТИМЕНТ"}{" "}
        </h1>
        <div className="search-block d-flex">
          <img className="image_search" src="../img/search.svg" alt="Search" />
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
          .map((item) => (
            <Card
              key={item.id}
              onClick={() => console.log(items)}
              onFavorite={() => onAddToFavorites(item)}
              onPlus={() => onAddToCart(item)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
