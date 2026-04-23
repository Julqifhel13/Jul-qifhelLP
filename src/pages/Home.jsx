import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Sparkles, Database, ChevronDown, Folder } from 'lucide-react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const groupedCertificates = {
    "Oracle": [
        { date: "Nov 2022", title: "Oracle Cloud Infrastructure Certified" },
        { date: "Nov 2022", title: "Oracle Cloud Data Management" }
    ],
    "Cognitive Class": [
        { date: "05 May 2024", title: "Big Data 101" },
        { date: "02 Mar 2024", title: "SQL and Relational Databases 101" },
        { date: "02 Mar 2024", title: "NoSQL and DBaaS 101" }
    ],
    "Cisco": [
        { date: "02 Mar 2024", title: "Data Analytics Essentials" }
    ],
    "Ask Lex: PH Academy": [
        { date: "Jan 2024", title: "Analytics 101 Businesses" }
    ],
    "Professional Development & Technical Skills": [
        { date: "17 Mar 2025", title: "Agile Methodology" },
        { date: "17 Mar 2025", title: "Data Driven Facilities Management: The Future of Smart Spaces" },
        { date: "17 Mar 2025", title: "Optimizing AI Potential: Balancing Prompt Engineering" },
        { date: "17 Mar 2025", title: "The Art of Effective Communication: Becoming a Leader People Trust" },
        { date: "17 Mar 2025", title: "Agile Testing In Action – A Beginner’s Guide For Future Testers" },
        { date: "17 Mar 2025", title: "Guide to FULLSTACK Development: From Zero to Hero" },
        { date: "17 Mar 2025", title: "Roles In Cybersecurity" },
        { date: "17 Mar 2025", title: "Web Development" },
        { date: "17 Mar 2025", title: "Business Communication" },
        { date: "17 Mar 2025", title: "LLMS DEMYSTIFIED: How Machines Became Talkative" },
        { date: "17 Mar 2025", title: "SQL- Backend" },
        { date: "May 2024", title: "Cyber Security" }
    ]
};

function FolderAccordion({ title, certs, isOpen, onClick }) {
    return (
        <div className={`border-b border-white/10 last:border-0 transition-colors duration-500 ${isOpen ? 'bg-white/5 rounded-2xl my-2 px-4 md:px-6' : 'px-4 md:px-6'}`}>
            <button
                onClick={onClick}
                className="w-full py-8 flex justify-between items-center group text-left transition-colors"
            >
                <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-[#2d3435] scale-105' : 'bg-white/5 text-white group-hover:bg-white/10'}`}>
                        <Folder size={20} className={isOpen ? "fill-[#2d3435]" : ""} />
                    </div>
                    <div>
                        <h4 className={`font-display text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{title}</h4>
                        <span className="text-[10px] tracking-widest uppercase text-white/40 mt-1 block">{certs.length} Certificates</span>
                    </div>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-white/40 group-hover:text-white transition-colors">
                    <ChevronDown size={24} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pt-2 pl-4 md:pl-[4.5rem]">
                            <ul className="space-y-6">
                                {certs.map((cert, i) => (
                                    <li key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 border-l border-white/10 pl-6 relative group cursor-default">
                                        <div className="absolute w-3 h-[1px] bg-white/10 -left-[1px] top-3 md:top-1/2 md:-translate-y-1/2 group-hover:bg-white/40 transition-colors"></div>
                                        <span className="text-[10px] tracking-widest uppercase text-white/40 font-bold shrink-0 min-w-[90px]">{cert.date}</span>
                                        <span className="text-sm text-white/80 group-hover:text-white transition-colors">{cert.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Home() {
    const [openFolder, setOpenFolder] = useState("Professional Development & Technical Skills");
    return (
        <main>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Specialized Skills (Asymmetric Grid) */}
            <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-4 block">Engineered Expertise</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">Specialized Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: GHL Workflow Automation */}
                        <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[320px] shadow-sm relative group overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                            <div className="absolute -right-32 -top-32 w-80 h-80 bg-gradient-to-br from-[#f4f5f6] to-transparent rounded-full blur-3xl group-hover:scale-150 group-hover:bg-[#e4e7e7]/50 transition-all duration-1000 ease-out z-0"></div>

                            <div className="relative z-10 flex justify-between items-start mb-12">
                                <div className="w-14 h-14 bg-[#f4f5f6] rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                                    <Network size={24} strokeWidth={1.5} className="text-[#636e72]" />
                                </div>
                                <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mt-2">Automation Layer</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">GHL Workflow Automation</h3>
                                <p className="text-[#636e72] leading-relaxed max-w-lg text-sm md:text-base">Orchestrating multi-stage logic, lead routing, and dynamic data syncs for complex CRM architectures.</p>
                            </div>
                        </div>

                        {/* Card 2: Technical Core */}
                        <div className="md:col-span-1 bg-gradient-to-br from-[#2d3435] to-[#141818] border border-white/5 text-white p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[320px] relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2d3435]/20 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                            <div className="relative z-10 flex flex-col gap-3 items-start">
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm">Javascript</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm">TailwindCSS</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm">HTML5</span>
                            </div>
                            <div className="relative z-10 mt-12">
                                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Technical Core</h3>
                                <span className="text-[9px] tracking-widest uppercase text-white/50 font-bold block group-hover:text-white/80 transition-colors">Front-End Excellence</span>
                            </div>
                        </div>

                        {/* Card 3: AI Tools */}
                        <div className="md:col-span-1 bg-[#e4e7e7] p-10 rounded-[2.5rem] flex flex-col justify-center gap-8 min-h-[320px] group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-[#2d3435] rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs mb-1">CLAUDE AI</h4>
                                    <span className="text-[8px] tracking-widest uppercase text-[#636e72]">Prompt Engineering</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#2d3435] shrink-0 shadow-sm">
                                    <Network size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs mb-1">GOOGLE STITCH AI</h4>
                                    <span className="text-[8px] tracking-widest uppercase text-[#636e72]">AI Website Designer</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: GHL Funnels & Landing Pages */}
                        <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between min-h-[320px] shadow-sm group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                            <div className="relative z-10 w-full md:w-2/3">
                                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">GHL Funnels<br />& Landing Pages</h3>
                                <p className="text-[#636e72] leading-relaxed mb-8 text-sm md:text-base">Conversion-optimized architectural design focused on user psychological triggers.</p>
                            </div>
                            <motion.div
                                animate={{ x: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                className="absolute -right-8 top-1/2 -translate-y-1/2 text-[140px] md:text-[200px] font-display font-bold text-[#f4f5f6] select-none z-0 pointer-events-none leading-none group-hover:text-[#e4e7e7] transition-colors duration-500"
                            >
                                UI.UX
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 2.5 Certifications */}
            <section className="pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="bg-[#2d3435] text-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl border border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8 border-b border-white/10 pb-8">
                        <div>
                            <span className="text-[10px] tracking-widest uppercase font-bold text-white/50 mb-4 block">Continuous Learning</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold">Certifications & Credentials</h2>
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-white/30 hidden md:block">19 Verified Achievements</span>
                    </div>

                    <div className="relative z-10 flex flex-col">
                        {Object.entries(groupedCertificates).map(([folderName, certs]) => (
                            <FolderAccordion
                                key={folderName}
                                title={folderName}
                                certs={certs}
                                isOpen={openFolder === folderName}
                                onClick={() => setOpenFolder(openFolder === folderName ? null : folderName)}
                            />
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* 3. Portfolio Grid */}
            <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-[#f2f4f4] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="max-w-7xl mx-auto relative z-10"
                >
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-2 block">See All My Works</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2d3435]">Portfolio</h2>
                        </div>
                        <span className="hidden md:block text-[10px] tracking-widest uppercase text-[#636e72]/40">Scalable Solutions</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        <ProjectCard
                            title="Workflow Automation Works"
                            tags={["Automation", "GHL"]}
                            description="See all my Workflow Automation Works"
                            image="/Asset/enterprise_workflow.png"
                            linkTo="/project/enterprise-workflow"
                        />
                        <ProjectCard
                            title="Landing Pages"
                            tags={["Landing Pages", "UI/UX"]}
                            description="See all my works in Landing Pages Sample works. I built some using GoHighLevel, some using custom html css, some using AI tools and etc."
                            image="/Asset/conversion_funnel.png"
                            linkTo="/project/landing-pages"
                        />
                    </div>
                </motion.div>
            </section>

            {/* 4. Evolution Section */}
            <section className="bg-[#2d3435] py-32 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="max-w-6xl mx-auto relative z-10"
                >
                    <div className="text-center mb-16">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-bold block mb-4">The Professional Evolution</span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                            From IT Specialist to GoHighLevel Specialist
                        </h2>
                    </div>

                    <div className="border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col md:flex-row gap-12 md:gap-0 relative">
                        {/* Connecting Line (Mobile) */}
                        <div className="md:hidden absolute left-8 top-8 bottom-8 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent z-0"></div>

                        {/* Phase 01 */}
                        <div className="flex-1 md:pr-16 lg:pr-20 md:border-r border-white/10 flex flex-col relative group z-10">
                            <div className="hidden md:block absolute -right-[5px] top-10 w-2.5 h-2.5 rounded-full bg-[#2d3435] border-2 border-white/20 group-hover:border-white transition-all duration-300 group-hover:scale-150 z-10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-bold block mb-8 group-hover:text-white/80 transition-colors pl-6 md:pl-0">Phase 01 — The Roots</span>
                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 pl-6 md:pl-0 group-hover:translate-x-2 transition-transform duration-300">IT Support & System Logic</h3>
                            <p className="text-white/60 leading-relaxed font-light mb-12 pl-6 md:pl-0">
                                My journey began in the trenches of IT Support, where I mastered the art of technical troubleshooting and system resilience. This foundation of stability and logic paved the way for my pivot into technical marketing.
                            </p>
                            <ul className="flex flex-col gap-4 mt-auto pl-6 md:pl-0">
                                <li className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-white/70 font-bold group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors"></div>
                                    Hardware Diagnostics
                                </li>
                                <li className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-white/70 font-bold group-hover:translate-x-2 transition-transform duration-300 delay-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors"></div>
                                    Network Infrastructure
                                </li>
                                <li className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-white/70 font-bold group-hover:translate-x-2 transition-transform duration-300 delay-150">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors"></div>
                                    Critical Problem Solving
                                </li>
                            </ul>
                        </div>

                        {/* Phase 02 */}
                        <div className="flex-1 md:pl-16 lg:pl-20 flex flex-col mt-12 md:mt-0 pt-12 md:pt-0 border-t md:border-t-0 border-white/10 relative group z-10">
                            <div className="hidden md:block absolute -left-[5px] top-10 w-2.5 h-2.5 rounded-full bg-[#2d3435] border-2 border-white/20 group-hover:border-white transition-all duration-300 group-hover:scale-150 z-10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-bold block mb-8 group-hover:text-white/80 transition-colors pl-6 md:pl-0">Phase 02 — The Future</span>
                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 pl-6 md:pl-0 group-hover:translate-x-2 transition-transform duration-300">GoHighLevel Specialist</h3>
                            <p className="text-white/60 leading-relaxed font-light mb-12 pl-6 md:pl-0">
                                Today, I work as a GoHighLevel Specialist, building and optimizing automation systems that connect technical infrastructure with business growth. I don’t just create funnels—I develop revenue-driving systems through workflows, CRM processes, and smart automation.
                            </p>
                            <ul className="flex flex-col gap-4 mt-auto pl-6 md:pl-0">
                                <li className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-white/70 font-bold group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors"></div>
                                    GHL Workflow Automation
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 flex items-center justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/40"></div>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Jul-Qifhel M. Cana</span>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/40"></div>
                    </div>
                </motion.div>
            </section>

            {/* 5. Credentials & CTA */}
            <section className="py-44 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e4e7e7]/50 via-transparent to-transparent blur-3xl pointer-events-none -z-10"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold mb-12 tracking-tighter text-[#2d3435] leading-[0.85]">Ready to<br />Scale?</h2>
                    <button className="bg-[#2d3435] text-white px-12 py-6 rounded-full font-bold text-xs uppercase tracking-widest hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(45,52,53,0.4)] transition-all duration-300 flex items-center gap-4 mx-auto group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                        <span className="relative z-10">Initiate Project</span>
                        <motion.span
                            className="text-xl relative z-10"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >→</motion.span>
                    </button>
                </motion.div>
            </section>
        </main>
    );
}
