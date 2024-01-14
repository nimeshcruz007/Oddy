import { Link } from "react-router-dom";

function Pagenav() {
  return (
    <nav className="order-page__nav">
      <div>
        <span className="order-page__nav-logo"></span>
        <ul>
          <li>
            <Link to="/">
              <i className="icon-invoice"></i>
            </Link>
          </li>
          <li>
            <Link to="/invoice">
              <i className="icon-invoice"></i>
            </Link>
          </li>
          <li>
            <Link to="/clients">
              <i className="icon-invoice"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="icon-invoice"></i>
            </Link>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <Link to="/settings">
            <i className="icon-invoice"></i>
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <i className="icon-invoice"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagenav;
