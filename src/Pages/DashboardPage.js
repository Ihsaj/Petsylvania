import '../Pages/DashboardPage.css';
import Navbar from '../Components/Navbar';
import HeroSectionDashboard from '../Components/HeroSectionDashboard';
import DogCardsSection from '../Components/DogCardsSection';
import FindSection from '../Components/FindSection';
import ProfileIcon from '../Assets/ProfileLogo.png';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <Navbar />

      <main>
        <div className="dashboard-container">
          <HeroSectionDashboard />
          <DogCardsSection />
          <FindSection />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
