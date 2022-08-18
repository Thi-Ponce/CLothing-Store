import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => (
  <>
    <div className="navigation">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          SHOP
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
