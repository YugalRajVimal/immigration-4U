import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FooterWithContact from "./Components/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicesSection from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import WelcomePage from "./Pages/WelcomePage";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  // Show NavBar and Footer on all pages except Welcome Page ("/")
  const hideLayout = location.pathname === "/";

  return (
    <>
      {!hideLayout && <NavBar />}
      {children}
      {!hideLayout && <FooterWithContact />}
    </>
  );
};

// Main App with Router
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="*"
          element={
            <LayoutWrapper>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesSection />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </LayoutWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
