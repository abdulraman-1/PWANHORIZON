import { Routes, Route } from 'react-router-dom';
import Approute from './Layout/Approute';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurFondersPage from './pages/OurFondersPage';
import ManagementTeamPage from './pages/ManagementTeamPage';
import ContactUsPage from './pages/ContactUsPage';
import BuyNowPage from './pages/BuyNowPage';
import ServicesPage from './pages/ServicesPage';
import OurEstatePage from './pages/OurEstatePage';
import ProjectGalleryPage from './pages/ProjectGalleryPage';

import BurckinghamEstate from "./Estates/BurckinghamEstate"
import HorizonEstate from './Estates/HorizonEstate';
import IredeEstate from './Estates/IredeEstate';
import ObibiEze from './Estates/ObibiEze';
import DukeAndDuchess from './Estates/DukeAndDuchess';


import Investment from './pages/Services/Investment';
import Management from './pages//Services/Management';
import Development from './pages/Services/Development';
import Consultation from './pages/Services/Consultation';
import Surveying from './pages/Services/Surveying';
import Webinar from './pages/Services/Webinar';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Approute/>}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/founders" element={<OurFondersPage />} />
        <Route path="/management" element={<ManagementTeamPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/buynow" element={<BuyNowPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ourestate" element={<OurEstatePage />} />
        <Route path="/project" element={<ProjectGalleryPage />} />

        
        <Route path="/burckinham" element={<BurckinghamEstate />} />
        <Route path="/horizon" element={<HorizonEstate />} />
        <Route path="/irede" element={<IredeEstate />} />
        <Route path="/obibieze" element={<ObibiEze />} />
        <Route path="/dukeandduchess" element={<DukeAndDuchess />} />



        <Route path="/investment" element={<Investment />} />
        <Route path="/estatemanagement" element={<Management />} />
        <Route path="/development" element={<Development />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/surveying" element={<Surveying />} />
        <Route path="/webinar" element={<Webinar />} />

      </Route>
    </Routes>
  );
}

export default App;
