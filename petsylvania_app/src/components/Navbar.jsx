import styled from "styled-components";
import logo from "../assets/Logo.png";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: 52px;
  width: auto;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo src={logo} alt="Petsylvania Logo" />
      <Right>
        <span>Office Manager</span>
      </Right>
    </Nav>
  );
}
