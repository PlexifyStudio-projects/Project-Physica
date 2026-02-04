import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ForPatientsPage from './pages/ForPatientsPage';
import InsurancePage from './pages/InsurancePage';
import CareersPage from './pages/CareersPage';
import GeneralQuestionsPage from './pages/GeneralQuestionsPage';
import './styles/App.scss';

function App() {
  return (
    <Router basename="/Project-Physica">
      <ScrollToTop />
      <div className="App">
        <Logo />
        <Header />
        <main className="App__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/for-patients" element={<ForPatientsPage />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/general-questions" element={<GeneralQuestionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
