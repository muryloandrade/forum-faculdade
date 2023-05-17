import styled from "styled-components";

export const NavBarElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #164285;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 0.7em;
`;

export const ButtonNavi = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #164285;
  color: #72bf44;
  border: 1px solid #72bf44;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #164285;
  width: 20%;
  gap: 1em;
`;
