import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import LandingPages from './pages/LandingPages';
import HireMe from './pages/HireMe';

function App() {
    return (
        <div className="min-h-screen bg-[#f9f9f9] selection:bg-[#2d3435] selection:text-white">
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/enterprise-workflow" element={<CaseStudy />} />
                <Route path="/project/landing-pages" element={<LandingPages />} />
                <Route path="/hire-me" element={<HireMe />} />
            </Routes>
            <footer className="py-12 border-t border-[#f2f4f4] px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="font-display font-bold uppercase tracking-tighter text-sm text-[#2d3435]">JUL-QIFHEL</span>
                <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#636e72]">
                </div>
                <span className="text-[10px] text-[#636e72]/50">© 2026 Julqifhel Cana.</span>
            </footer>
        </div>
    );
}

export default App;