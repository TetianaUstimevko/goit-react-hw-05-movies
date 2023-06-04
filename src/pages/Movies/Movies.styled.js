import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledForm = styled.form`
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;

  margin-bottom: 15px;

  background-color: #124ece;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
`;

export const StyledSearchInput = styled.input`
  outline: none;
  border: none;

  display: flex;
  align-items: center;

  width: 250px;
  height: 30px;
  margin-right: 5px;

  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: rgb(139, 167, 147) 1px 1px 3px inset,
    rgb(255, 255, 255) -1px -1px 5px inset;
  padding: 5px;

  &:hover,
  &:focus {
    border: none;
  }
`;

export const StyledSearchButton = styled.button`
  display: inline-block;
  width: 48px;
  width: 55px;
  height: 42px;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  margin-bottom: 7px;
  text-decoration: none;
  color: #1261e0;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-visible {
    color: #eb2b2c;
    scale: 1.1;
  }
`;