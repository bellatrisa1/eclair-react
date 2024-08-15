function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={80} height={80} className="logo" src="../img/logo.PNG" />
        <div>
          <h3 className="text-uppercase">React Eclair</h3>
          <p>Самые вкусные десерты</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="../img/cart.svg" alt="cart" />
          <span>1250₽</span>
        </li>
        <li>
          <img width={18} height={18} src="../img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
export default Header;