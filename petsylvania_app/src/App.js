// src/App.js
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppointmentCard from "./components/AppointmentCard";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";


const Layout = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-left: 220px;
  padding: 20px;
  width: calc(100% - 220px);
`;

const CardsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Layout>
        <Sidebar />

        <Content>
          <h2>Appointment Management</h2>

          <CardsRow>
            <AppointmentCard
              name="Max"
              age="3 years"
              procedure="Surgery"
              time="Today, 09:30"
              doctor="Daniel"
            />
            <AppointmentCard
              name="Bella"
              age="6 months"
              procedure="Injection"
              time="Today, 10:30"
              doctor="Carlie"
            />
            <AppointmentCard
              name="Joe"
              age="2 years"
              procedure="Blood Test"
              time="Today, 10:40"
              doctor="Barbara"
            />
          </CardsRow>
        </Content>
      </Layout>
    </ThemeProvider>
  );
}
