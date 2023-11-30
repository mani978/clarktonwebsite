import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-danger bg-danger p-0">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Clarkton Corp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold text-light"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                All Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item text-muted" to="/account/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-muted" to="/account/signup">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item text-muted" to="/checkout">
                    Checkout Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-muted" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                {/* <li>
                  <Link className="dropdown-item text-muted" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-muted" to="/blog/detail">
                    Blog Detail
                  </Link>
                </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item text-muted" to="/fsafasf">
                    404 Page Not Found
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-muted" to="/500">
                    500 Internal Server Error
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/category">
                Tires
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/category">
                Engine Parts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/category">
                Batteries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/category">
                Car Interior
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/category">
                Accessories
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/category">
                Jewellery
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/documentation">
                Documentation
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
