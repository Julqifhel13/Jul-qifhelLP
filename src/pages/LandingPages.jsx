import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, ExternalLink, Code, LayoutTemplate, Sparkles } from 'lucide-react';

export default function LandingPages() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsData = [
        {
            title: 'Mission Impact Legal Services',
            type: 'GoHighLevel',
            icon: Code,
            description: 'A clean and conversion-focused landing page built to present MILA’s brand with clarity and impact. Designed to guide visitors through a simple flow that highlights key value, builds trust, and drives action. The layout focuses on strong messaging, modern visuals, and a clear call-to-action to improve engagement and conversions.',
            images: [
                "/Asset/Landing-page-screenshot/MILA%20home%20portfolio.png"
            ],
            tags: ['HTML', 'CSS', 'JavaScript', 'GoHighLevel']
        },
        {
            title: 'Yellow Mountain Business Solutions',
            type: 'Custom HTML/CSS',
            icon: Code,
            description: 'A performance-driven landing page created for Yellow Mountain Business Solutions, focused on showcasing services and generating qualified leads. Built with structured sections, persuasive copy, and automation-friendly design to support business growth and streamline client acquisition.',
            images: [
                "/Asset/Landing-page-screenshot/YMBS%20home%20portfolio%20.png"
            ],
            tags: ['HTML', 'CSS', 'JavaScript', 'GoHighLevel']
        },
        {
            title: 'Doctor Mold pro',
            type: 'AI Generated',
            icon: Code,
            description: 'A service-oriented landing page designed for Doctor Mold Pro to attract local leads and increase booking inquiries. It emphasizes trust, urgency, and clear service benefits, with a simple user journey that encourages visitors to request inspections or contact the business quickly.',
            images: [
                "/Asset/Landing-page-screenshot/DMP%20-%20Home%20portfolio.png"
            ],
            tags: ['HTML', 'CSS', 'JavaScript', 'GoHighLevel']
        }
    ];

    return (
        <main className="bg-[#f9f9f9] min-h-screen text-[#2d3435]">
            <article className="pt-44">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12 md:mb-16">
                    <div className="flex flex-wrap justify-between items-end gap-3 mb-4">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72]">UI/UX EXPERTISE</span>
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] italic">Portfolio<br /><span className="not-italic text-sm">2024-2026</span></span>
                    </div>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter max-w-4xl">
                        HIGH-CONVERTING LANDING PAGES
                    </h1>
                </div>

                {/* Hero Intro */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
                    <p className="font-display text-2xl md:text-3xl leading-relaxed max-w-4xl text-[#2d3435]">
                        High-converting landing pages are designed to turn visitors into leads or customers with minimal friction. They focus on clear messaging, strong visuals, and a single goal-driven call-to-action. Every section is built to guide attention, build trust, and push users toward taking action—whether it’s signing up, booking a call, or making a purchase.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-32 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, idx) => {
                            const Icon = project.icon;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedProject(project)}
                                    className="bg-white border border-gray-200 shadow-sm rounded-[2rem] p-8 text-left hover:shadow-2xl hover:border-[#2d3435] hover:-translate-y-2 transition-all duration-300 group flex flex-col min-h-[380px]"
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="bg-[#f2f4f4] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#2d3435] group-hover:text-white transition-colors duration-300">
                                            <Icon size={24} />
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-[#f2f4f4] rounded-full text-[10px] font-bold uppercase tracking-widest text-[#636e72] group-hover:bg-[#2d3435] group-hover:text-white/80 transition-colors">
                                            {project.type}
                                        </span>
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className="font-display font-bold text-2xl mb-3 text-[#2d3435]">{project.title}</h3>
                                        <p className="text-[#636e72] text-sm leading-relaxed mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map((tag, tagIdx) => (
                                                <span key={tagIdx} className="text-[10px] font-bold text-[#636e72]/70 uppercase tracking-wider">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-[#f2f4f4] flex flex-wrap justify-between items-center gap-6">
                    <a href="/project/enterprise-workflow" className="flex items-center gap-4 group order-1">
                        <ArrowLeft size={16} className="text-[#636e72] group-hover:-translate-x-2 transition-transform" />
                        <div>
                            <div className="text-[8px] uppercase tracking-widest text-[#636e72] mb-1">Previous Project</div>
                            <div className="font-bold text-sm">Enterprise Workflow</div>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 text-right opacity-30 cursor-not-allowed order-2">
                        <div>
                            <div className="text-[8px] uppercase tracking-widest text-[#636e72] mb-1">Next Project</div>
                            <div className="font-bold text-sm">Coming Soon</div>
                        </div>
                        <ArrowRight size={16} className="text-[#636e72]" />
                    </div>

                    <a href="/" className="order-3 w-full md:w-auto md:order-none text-center text-[10px] font-bold uppercase tracking-widest border-b border-[#2d3435] pb-1 hover:text-[#636e72] hover:border-[#636e72] transition-colors">
                        Back to Home
                    </a>
                </div>
            </article>

            {/* Fullscreen Project Lightbox Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 overflow-y-auto bg-[#2d3435]/95 custom-scrollbar"
                        onClick={() => setSelectedProject(null)}
                    >
                        {/* Header Area */}
                        <div className="sticky top-0 z-50 flex justify-between items-start p-6 md:p-12 bg-gradient-to-b from-[#2d3435]/90 to-transparent pointer-events-none pb-12">
                            <div className="text-white pointer-events-auto max-w-2xl">
                                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 mb-4 border border-white/10">
                                    {selectedProject.type}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">{selectedProject.title}</h3>
                                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>
                            <button
                                className="text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-4 transition-all duration-300 pointer-events-auto backdrop-blur-md shrink-0"
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Image Showcase */}
                        <div className="w-full max-w-5xl mx-auto px-6 md:px-12 pb-32 pt-8 flex flex-col gap-12 md:gap-24" onClick={(e) => e.stopPropagation()}>
                            {selectedProject.images.map((imgSrc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4), ease: "easeOut" }}
                                    className="w-full bg-[#1e2324] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 relative group"
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`${selectedProject.title} Preview ${idx + 1}`}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* Optional hover overlay for images */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
