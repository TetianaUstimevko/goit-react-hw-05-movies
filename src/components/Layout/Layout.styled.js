import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #1b1a1a;
  font-size: 18px;
  :hover,
  :focus {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  &.active {
    color: #f513cf;
  }

`;
