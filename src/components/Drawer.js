function Drawer({onClose, onRemove, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          КОРЗИНА{" "}
          <img
            onClick={onClose}
            className="cu-p"
            src="../img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <>
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg"
                ></div>

                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}₽</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className="removeBtn"
                  src="../img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            </>
          ))}
        </div>

        <div className="totalBlock">
          <ul>
            <li>
              <span>ИТОГО: </span>
              <div></div>
              <b>2479₽</b>
            </li>
            <li>
              <span>НАЛОГ 5%: </span>
              <div></div>
              <b>199₽</b>
            </li>
          </ul>
          <button className="greenButton">
            ОФОРМИТЬ ЗАКАЗ <img src="../img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
