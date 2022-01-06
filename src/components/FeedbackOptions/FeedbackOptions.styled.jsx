import styled from 'styled-components';
const List = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;

  width: 100%;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  /* &:not(:first-child) {
    margin-left: 20px;
  } */
`;

const Button = styled.button`
  color: #ffffff;
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 20%;
  background: rgb(180, 182, 190);
  background: linear-gradient(
    323deg,
    rgba(180, 182, 190, 1) 0%,
    rgba(73, 69, 69, 1) 30%,
    rgba(68, 19, 19, 1) 54%
  );

  &:hover,
  &:focus {
    cursor: pointer;
    background: rgb(180, 182, 190);
    background: linear-gradient(
      323deg,
      rgba(180, 182, 190, 1) 0%,
      rgba(73, 69, 69, 1) 19%,
      rgba(31, 4, 4, 1) 44%
    );
    box-shadow: 5px 5px 10px 1px #ffffff;
  }
  &:active {
    box-shadow: inset 5px 5px 5px -2px #ffffff;
  }
`;

export { List, Item, Button };
