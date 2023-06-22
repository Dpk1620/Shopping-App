import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
    return (
      <div className="fixed-top">
        <header className="header clearfix">
          <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/" style={{ color: "#fff" }}>
              myShopping{" "}
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
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                  <li className="nav-item" >
                    <Link style={{ color: "#fff" }}
                      className="nav-Link active" 
                      aria-current="page"
                      to="/Cart"
                    >
                      Cart
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                    <div className="top-categories-search">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
export default Header;
