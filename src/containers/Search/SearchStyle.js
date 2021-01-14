import styled from "styled-components";

export const SSearch = styled.form`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;

  min-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const SUl = styled.ul`
  list-style: none;
  font-size: 2rem;
  background-color: white;
  width: 60rem;
  max-height: 60vh;
  overflow: scroll;
  position: absolute;
  top: 8rem;
  margin: auto auto auto 4.5rem;
  padding: 2rem;

  box-shadow: 4px 2px 15px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 56.25em) {
    width: 65%;
    margin: auto auto auto 3rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 50%;
  }
`;

export const SLi = styled.li`
  padding: 4px 2px;

  &:not(:last-child)::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    display: block;
  }
`;

export const Sa = styled.a`
  &:hover {
    cursor: pointer;
    color: #236f82;
  }
`;
