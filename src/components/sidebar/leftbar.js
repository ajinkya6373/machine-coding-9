import { styled } from "styled-components";

export const LeftbarWrapper = styled.div`
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  @media (max-width: 767px) {
    flex-direction: row;
    bottom: 0;
    width: 100%;
    justify-content: space-around;
  }
`;

export const LeftbarLink = styled.p`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
  color: black;
  background: white;
  border-radius: 50px;
  align-items: center;
  width: 9rem;

  &:hover {
   color: #66a0d0;
  }

  &.selected {
    color: #66a0d0;
  }

  @media (max-width: 617px) {
    width: unset;

    span {
      display: none;
    }

    &:hover {
      color: #66a0d0;
    }

    &.selected {
      color: #66a0d0;
    }
  }
`;
