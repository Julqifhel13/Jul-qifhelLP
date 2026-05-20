import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md px-6 md:px-12 py-5 md:py-6 flex justify-between items-center">
                <Link to="/" className="font-display font-bold tracking-tighter text-xl uppercase hover:opacity-80 transition-opacity">Jul-Qifhel</Link>

                <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-accent">
                    <Link to="/" className="hover:text-text transition-colors">Home</Link>
                    <a href="/#work" className="hover:text-text transition-colors">Project</a>
                    <Link to="/hire-me" className="hover:text-text transition-colors">Contact</Link>
                </div>

                <Link to="/hire-me" className="hidden md:inline-block bg-text text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                    Work with Me
                </Link>

                <button
                    type="button"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-text text-white"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-[#2d3435] text-white transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="h-full flex flex-col justify-center items-center gap-10 px-6">
                    <Link to="/" className="font-display text-4xl font-bold tracking-tight">Home</Link>
                    <a href="/#work" className="font-display text-4xl font-bold tracking-tight" onClick={() => setOpen(false)}>Project</a>
                    <Link to="/hire-me" className="font-display text-4xl font-bold tracking-tight">Contact</Link>
                    <Link
                        to="/hire-me"
                        className="mt-8 bg-white text-[#2d3435] px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest"
                    >
                        Work with Me
                    </Link>
                </div>
            </div>
        </>
    );
}
