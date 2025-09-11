import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProgramCard from "./components/ProgramCard";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import DonateButton from "./components/DonateButton";
import FloatingMenu from "./components/FloatingMenu";

// Pages
import About from "./Pages/About";
import Program from "./Pages/Program";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";
import Gallery from "./Pages/Gallery";
import GetInvolved from "./Pages/GetInvolved";
import Volunteer from "./Pages/Volunteer";
import UpcomingEvents from "./Pages/UpcomingEvents";
import Details from "./Pages/Details";
import PartnerWithUs from "./Pages/PartnerWithUs";
import Impact from "./Pages/Impact";
import Testimonials from "./Pages/Testimonials";
import FAQ from "./Pages/FAQ";
import LandingPage from "./Pages/LandingPage"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "2rem",
                  margin: "2rem 0",
                }}
              >
                <ProgramCard
                  id="women-empowerment"
                  title="Women's Empowerment"
                  description="Supporting women and children in local communities."
                  image="women-empowerment.jpg"
                />
                <ProgramCard
                  id="education"
                  title="Child Education"
                  description="Providing free education and resources for underprivileged children."
                  image="education.jpg"
                />
                <ProgramCard
                  id="healthcare"
                  title="Healthcare Access"
                  description="Ensuring women and children receive proper healthcare and support."
                  image="healthcare.jpg"
                />
                <ProgramCard
                  id="disaster-relief"
                  title="Natural Disaster Relief"
                  description="Providing immediate assistance and long-term support to communities affected by natural disasters."
                  image="disaster-relief.jpg"
                />
              </div>
              <ContactForm />
              <Footer />
              <FloatingMenu />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/program/:category" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/partner" element={<PartnerWithUs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;