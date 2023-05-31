import styled from 'styled-components';

export const Header = styled.header`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const SearchBtn = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  ursor: pointer;
  outline: none;
  background-image: url('https://cdn-icons-png.flaticon.com/512/149/149852.png');
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
`;