import styled from "styled-components";

const Side = styled.div`
  width: 220px;
  background: #ffffff;
  height: 100vh;
  padding: 20px 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: fixed;
  left: 0;
  top: 0;
`;

const Item = styled.div`
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  color: ${({ theme }) => theme.darkBlue};
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.lightBlue};
  }
`;

export default function Sidebar() {
  return (
    <Side>
      <Item>Overview</Item>
      <Item>Appointments</Item>
      <Item>Patients</Item>
      <Item>Inventory</Item>
      <Item>Staff</Item>
      <Item>Settings</Item>
    </Side>
  );
}
