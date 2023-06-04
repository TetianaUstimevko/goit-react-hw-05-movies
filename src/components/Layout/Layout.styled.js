import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 0 40px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  padding: 20px 0;
  font-size: 18px;
  color: #1b1a1a;
  transform: scale3d(1, 1, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);


  &:hover,
  &:focus {
    transform: scale3d(1.1, 1.1, 1.1);

    }

  &.active {
    color: #f513cf;
  }
`;

export const StyledMain = styled.main`
  padding: 30px;
`;

