function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img className="cu-p" src="../img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(../img/eclair/cake1.png)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Ягодная корзина Dé fleur éclair</p>
              <b>199₽</b>
            </div>
            <img
              className="removeBtn"
              src="../img/btn-remove.svg"
              alt="Remove"
            />
          </div>

          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(../img/eclair/cake2.png)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Ягодная корзина Dé fleur éclair</p>
              <b>299₽</b>
            </div>
            <img
              className="removeBtn"
              src="../img/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>

        <div className="totalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>398₽</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>130₽</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="../img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
