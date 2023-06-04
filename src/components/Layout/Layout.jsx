import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li >
            <StyledNavLink to="/" >Home</StyledNavLink>
          </li>
          <li >
            <StyledNavLink to="/movies" >Movies</StyledNavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
