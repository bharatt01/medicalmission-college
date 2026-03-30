import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTopManager from './components/ScrollToTopManager'; 
import ScrollToTopButton from './components/ScrollToTop'; // Your floating button
import Navbar from './components/Navbar';

import Home from './pages/Home';
import CoursesPage from './pages/Courses';
import Placement from './pages/Placement';
import WhyUsPage from './pages/WhyUs';
import ContactUsPage from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Logic: Resets scroll on every page change */}
      <ScrollToTopManager />

      {/* UI: Floating button for manual scroll up */}
      <ScrollToTopButton />
      
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/placements' element={<Placement />} />
          <Route path='/why-us' element={<WhyUsPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
        </Routes>
      </main>


    </Router>
  );
}

export default App;