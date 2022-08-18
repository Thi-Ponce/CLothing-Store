import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <div className="navigation">
      <Link to="/" className="logo-container">
        <div>Logo</div>
      </Link>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
