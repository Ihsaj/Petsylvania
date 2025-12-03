import '../Pages/DashboardPage.css';

import Navbar from '../Components/Navbar';
import HeroSectionDashboard from '../Components/HeroSectionDashboard';
import DogCardsSection from '../Components/DogCardsSection';
import FindSection from '../Components/FindSection';

const DashboardPage = () => {
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