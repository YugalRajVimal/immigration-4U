import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FooterWithContact from "./Components/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicesSection from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import WelcomePage from "./Pages/WelcomePage";
import InvestmentPage from "./Components/InvestmentPage";
import BusinessPage from "./Components/BusinessPage";
import EmploymentPage from "./Components/EmploymentPage";
import EmailChunker from "./temp";
import CountryWiseData from "./Pages/CountryWiseData";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  // Show NavBar and Footer on all pages except Welcome Page ("/")
  const hideLayout = location.pathname === "/";

  return (
    <>
      <NavBar />
      {children}
      <FooterWithContact />
    </>
  );
};

// Main App with Router
const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route
          path="*"
          element={
            <LayoutWrapper>

              <Routes>
                {/* <Route path="/" element={<WelcomePage />} /> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesSection />} />
                <Route path="/contact" element={<ContactPage />} />

                <Route
                  path="/investment"
                  element={<InvestmentPage/>}
                />
                <Route
                  path="/business"
                  element={<BusinessPage />}
                />
                <Route
                  path="/employment"
                  element={<EmploymentPage />}
                />

<Route
                  path="/temp"
                  element={<EmailChunker />}
                />

<Route
  path="/country/:country"
  element={<CountryWiseData />}
/>

           
   
              </Routes>
            </LayoutWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
