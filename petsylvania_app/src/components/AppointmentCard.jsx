import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 14px;
  padding: 18px;
  width: 260px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Name = styled.h3`
  font-size: 17px;
  font-weight: 600;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 10px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default function AppointmentCard({ name, age, procedure, time, doctor }) {
  return (
    <Card>
      <Name>{name}</Name>
      <p>{age} old</p>
      <p>{procedure}</p>
      <p>{time}</p>
      <p>Dr. {doctor}</p>
      <Button>Check In</Button>
    </Card>
  );
}
