import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection'; 
import StatsSection from './components/StatsSection';
import VisionMission from './components/VisionMission';
import ServicesSection from './components/ServicesSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Requirement_analysis from './components/Processes/Requirement_analysis'; 
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { fetchDataRequest } from './store/slices/postsSlice';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';
import Acceptance_testing from './components/Processes/Acceptance_testing';
import Installation from './components/Processes/Installation';
import Project_Design from './components/Processes/Project_Design';
import Project_Development from './components/Processes/Project_Development';
import Project_Proposal from './components/Processes/Project_Proposal';
import LibraryAutomationSystem from './components/Products/LibraryAutomationSystem';
import CampSysERP from './components/Products/CampSysERP';
import AndroidApps from './components/Products/AndroidApps';
import Ecommerce from './components/Products/Ecommerce';
import Esecure from './components/Products/Esecure';
import FileTrackingSystem from './components/Products/FileTrackingSystem';
import OurClients from './components/Partner/OurClients';
import CompanyProfile from './components/AboutUs/CompanyProfile';

function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <StatsSection />
        <VisionMission />
        <ServicesSection />
        <TechStackSection />
        <ContactSection />
      </main>
    </div>
  );
}

function App() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.posts);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    dispatch(fetchDataRequest());
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  if (showSplash || loading) {
    return <SplashScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-red-50 p-4 rounded-lg shadow-md">
          <p className="text-red-600">Error: {error.message}</p>
        </div>
      </div>
    );
  }


  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processes/requirement_analysis" element={<Requirement_analysis />} />
        <Route path="/processes/acceptance-testing" element={<Acceptance_testing />} />
        <Route path="/processes/installation" element={<Installation/>} />
        <Route path="/processes/project-design" element={<Project_Design />} />
        <Route path="/processes/project-development" element={<Project_Development />} />
        <Route path="/processes/project-proposal" element={<Project_Proposal />} />
        <Route path="/products/library-automation" element={<LibraryAutomationSystem />} />
        <Route path="/products/file-tracking" element={<FileTrackingSystem />} />
        <Route path="/products/campsys-erp" element={<CampSysERP />} />
        <Route path="/products/android-apps" element={<AndroidApps />} />
        <Route path="/products/ecommerce" element={<Ecommerce />} />
        <Route path="/products/esecure" element={<Esecure />} />
        <Route path="/clients/be-our-partner" element={<OurClients />} />
        <Route path="/about/company-profile" element={<CompanyProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;