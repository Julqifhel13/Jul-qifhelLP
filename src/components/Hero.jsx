import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="pt-44 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center"
            >
                <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[0.9]">
                    Jul-Qifhel Cana
                </h1>
                <p className="text-lg md:text-xl text-accent leading-relaxed max-w-2xl mx-auto font-light">
                    A results-driven GoHighLevel automation specialist, focused on building data-driven systems that streamline complex workflows, optimize lead management, and improve overall business efficiency.
                </p>
                <div className="flex justify-center gap-4 mt-12">
                    <Link to="/hire-me" className="bg-text text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                        Hire Me
                    </Link>
                    <Link to="/project/landing-pages" className="bg-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest text-accent hover:bg-contrast transition-colors">
                        View Systems
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
