import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import EmbroideryOrders from './components/EmbroideryOrders';
import Testimonials from './components/Testimonials';
import LuxuryShowcase from './components/LuxuryShowcase';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import Assortment from './components/Assortment';
// Remove the CategoryDetail import since it doesn't exist
import PeopleManagement from './components/PeopleManagement';
import About from './components/About';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <EmbroideryOrders />
      <Testimonials />
      <LuxuryShowcase />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/assortment" element={<Assortment />} />
          {/* Remove the CategoryDetail route or create the component */}
          {/* <Route path="/assortment/:category" element={<CategoryDetail />} /> */}
          <Route path="/people-management" element={<PeopleManagement />} />
          {/* Add other routes as needed */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;