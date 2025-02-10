import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Lazy load your components and pages
const Approute = lazy(() => import('./Approute'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const OurFondersPage = lazy(() => import('./pages/OurFondersPage'));
const ManagementTeamPage = lazy(() => import('./pages/ManagementTeamPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const BuyNowPage = lazy(() => import('./pages/BuyNowPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const OurEstatePage = lazy(() => import('./pages/OurEstatePage'));
const ProjectGalleryPage = lazy(() => import('./pages/ProjectGalleryPage'));

const BurckinghamEstate = lazy(() => import('./Estates/BurckinghamEstate'));
const HorizonEstate = lazy(() => import('./Estates/HorizonEstate'));
const IredeEstate = lazy(() => import('./Estates/IredeEstate'));
const ObibiEze = lazy(() => import('./Estates/ObibiEze'));
const DukeAndDuchess = lazy(() => import('./Estates/DukeAndDuchess'));

const Investment = lazy(() => import('./pages/Services/Investment'));
const Management = lazy(() => import('./pages/Services/Management'));
const Development = lazy(() => import('./pages/Services/Development'));
const Consultation = lazy(() => import('./pages/Services/Consultation'));
const Surveying = lazy(() => import('./pages/Services/Surveying'));
const Webinar = lazy(() => import('./pages/Services/Webinar'));

const App = () => {
  return (
    // Wrap your entire Routes tree in Suspense so that lazy components display a fallback while loading.
    <Suspense fallback={<div></div>}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Approute />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/founders" element={<OurFondersPage />} />
          <Route path="/management" element={<ManagementTeamPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/buynow" element={<BuyNowPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ourestate" element={<OurEstatePage />} />
          <Route path="/project" element={<ProjectGalleryPage />} />

          <Route path="/buckingham-court" element={<BurckinghamEstate />} />
          <Route path="/horizon-court" element={<HorizonEstate />} />
          <Route path="/irede-estate" element={<IredeEstate />} />
          <Route path="/obibieze-estate" element={<ObibiEze />} />
          <Route path="/duke-and-duchess-estate" element={<DukeAndDuchess />} />

          <Route path="/investment" element={<Investment />} />
          <Route path="/estatemanagement" element={<Management />} />
          <Route path="/development" element={<Development />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/survey" element={<Surveying />} />
          <Route path="/webinar" element={<Webinar />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
