import { Link } from "react-router-dom";

function Pagenav() {
  return (
    <nav className="order-page__nav ">
      <span className="order-page__nav-logo">Logo</span>
      <div className="order-page__nav-wraper">
        <ul>
          <li className="nav-item">
            <Link to="/">
              <i className="oddy-home"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/invoice">
              <i className="oddy-invoice"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clients">
              <i className="oddy-users"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart">
              <i className="oddy-burger"></i>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="nav-item">
            <Link to="/settings">
              <i className="oddy-settings"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout">
              <i className="oddy-exit"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Pagenav;
