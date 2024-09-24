import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={80} height={80} className="logo" src="../img/logo.PNG" />
          <div>
            <h3 className="text-uppercase">React Eclair</h3>
            <p className="nameCol">Best delicious Deserts</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="../img/cart.svg" alt="cart" />
          <span>2280₽</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="../img/heart.svg" alt="Heart" />
          </Link>
        </li>
        <li className="cu-p">
          <img width={18} height={18} src="../img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
