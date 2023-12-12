import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            JátékokApp
          </a>
          <div className="d-flex">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Kezdőlap
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tictactoe" className="nav-link">
                  Tictactoe
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/lighton" className="nav-link">
                  LigthOn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
