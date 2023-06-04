import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledList, StyledNavLink, StyledMain } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <StyledList>
          <li >
            <StyledNavLink to="/" >Home</StyledNavLink>
          </li>
          <li >
            <StyledNavLink to="/movies" >Movies</StyledNavLink>
          </li>
        </StyledList>
      </StyledHeader>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </div>
  );
};
export default Layout;
