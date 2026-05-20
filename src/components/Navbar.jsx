import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md px-6 md:px-12 py-6 flex justify-between items-center">
            <Link to="/" className="font-display font-bold tracking-tighter text-xl uppercase hover:opacity-80 transition-opacity">Jul-Qifhel</Link>
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-accent">
                <Link to="/" className="hover:text-text transition-colors">Home</Link>
                <a href="/#work" className="hover:text-text transition-colors">Project</a>
                <Link to="/hire-me" className="hover:text-text transition-colors">Contact</Link>
            </div>
            <Link to="/hire-me" className="bg-text text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                Work with Me
            </Link>
        </nav>
    );
}