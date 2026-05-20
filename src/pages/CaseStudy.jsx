import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Folder, X, ChevronLeft, ChevronRight } from 'lucide-react';

const FigmaIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
    </svg>
);

const ClaudeIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
    </svg>
);

const GoogleIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
);

export default function CaseStudy() {
    const [selectedFolder, setSelectedFolder] = useState(null);

    const foldersData = [
        {
            title: 'Copperstone',
            type: '9 Workflows',
            images: [
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20Forward%20request%20-%20Copperstone%20Automation.png",
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20Mail%20Aging%20Reminder-%20Copperstone%20Automation.png",
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20Mail%20Received%20-%20Copperstone%20Automation-imageonline.co-merged.png",
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20Mail%20Scan%20Request%20-%20Copperstone%20Automation.png",
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20Missed%20Call%20Response%20-%20Copperstone%20Automation.png",
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20Package%20Received%20-%20Copperstone%20Automation.png",
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20Tour%20No-Show%20-%20Copperstone%20Automation.png",
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20Virtual%20Office%20Tour%20Request-%20Copperstone%20Automation.png",
                "/Asset/Automations/Copperstone/WF%20%E2%80%93%20VO%20Client%20Onboarding-%20Copperstone%20Automation.png"
            ]
        },
        {
            title: 'YMBS',
            type: '6 Workflows',
            images: [
                "/Asset/Automations/YMBS/Book%20call%20-%20YMBS%20automation.png",
                "/Asset/Automations/YMBS/Contact%20us%20automation%20-%20YMBS%20automation.png",
                "/Asset/Automations/YMBS/Get%20guidance%20today%20Automation%20-%20YMBS%20automation.png",
                "/Asset/Automations/YMBS/Learn%20more%20automation%20-%20YMBS%20automation.png",
                "/Asset/Automations/YMBS/SEO%20-%20YMBS%20automation.png",
                "/Asset/Automations/YMBS/Tech%20audit%20-%20YMBS%20automation.png"
            ]
        },
        {
            title: 'JohnTfloyd',
            type: '2 AI Tasks',
            images: [
                "/Asset/Automations/JohnTfloyd/task1.png",
                "/Asset/Automations/JohnTfloyd/task2.png"
            ]
        }
    ];

    return (
        <main className="bg-[#f9f9f9] min-h-screen text-[#2d3435]">
            <article className="pt-44">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12 md:mb-16">
                    <div className="flex flex-wrap justify-between items-end gap-3 mb-4">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72]">GOHIGHLEVEL WORKFLOW ARCHITECTURE</span>
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] italic">Case Study<br /><span className="not-italic text-sm">2024</span></span>
                    </div>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter max-w-4xl">
                        ADVANCED CRM AUTOMATIONS
                    </h1>
                </div>


                {/* The Challenge & Solution */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        <div>
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#636e72] mb-6 block">The Challenge</span>
                            <p className="font-display text-2xl md:text-3xl leading-relaxed">
                                At Yellow Mountain Business Solutions (YMBS), I handled 15 GoHighLevel automation systems, but many processes were still manual, fragmented, and prone to delays. Managing lead nurturing, follow-ups, and client onboarding across different workflows made it difficult to maintain consistency and speed.
                            </p>
                        </div>
                        <div>
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#636e72] mb-6 block">The Solution</span>
                            <div className="text-[#636e72] text-sm leading-loose font-light space-y-6">
                                <p>
                                    I built a centralized automation system in GoHighLevel that unified all workflows into a seamless process. Using conditional logic and trigger-based actions, the system automated lead tracking, follow-ups, and appointment flows in real time, reducing manual tasks and improving response speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Study Features Grid */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Conditional Logic */}
                        <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-sm min-h-[420px] md:h-[480px]">
                            <div className="mb-8">
                                <span className="inline-block px-4 py-1.5 bg-[#f2f4f4] rounded-full text-[10px] font-bold mb-6">01</span>
                                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Conditional Logic</h3>
                                <p className="text-[#636e72] text-sm leading-relaxed max-w-md">
                                    GoHighLevel conditional logic workflow featuring interconnected decision nodes, if/else branching paths, trigger-based actions, smart lead routing, dynamic automation sequences, and personalized workflow logic.
                                </p>
                            </div>
                            <div className="mt-auto -mx-8 md:-mx-10 -mb-8 md:-mb-10 h-48 md:h-64 bg-[#f2f4f4]">
                                <img src="/Asset/cs_nodes.png" alt="Nodes" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Tools List */}
                        <div className="md:col-span-1 bg-[#2d3435] text-white rounded-[2.5rem] p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[420px] md:h-[480px]">
                            <span className="text-[10px] tracking-widest uppercase font-bold text-white/50 mb-12 block">Tools I've Always Used</span>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div>
                                        <div className="font-bold text-base mb-1">GoHighLevel</div>
                                        <div className="text-[8px] uppercase tracking-widest text-white/50">Used to build and manage CRM systems, pipelines, and automation workflows.</div>
                                    </div>
                                    <TrendingUp size={18} className="text-white/80" />
                                </div>
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div>
                                        <div className="font-bold text-base mb-1">Google Stitch AI</div>
                                        <div className="text-[8px] uppercase tracking-widest text-white/50">Used to generate and explore web design layouts using AI-assisted design.</div>
                                    </div>
                                    <GoogleIcon size={18} className="text-white/80" />
                                </div>
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div>
                                        <div className="font-bold text-base mb-1">Figma</div>
                                        <div className="text-[8px] uppercase tracking-widest text-white/50">Used to design UI, user flows, and system architecture before development.</div>
                                    </div>
                                    <FigmaIcon size={18} className="text-white/80" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-base mb-1">Claude AI</div>
                                        <div className="text-[8px] uppercase tracking-widest text-white/50">Used for vibe coding—rapidly generating, refining, and experimenting with code and ideas in a fast, iterative way.</div>
                                    </div>
                                    <ClaudeIcon size={18} className="text-white/80" />
                                </div>
                            </div>
                            <p className="text-[10px] italic text-white/40 mt-12 leading-relaxed">
                                Engineered with fail-safe redundancy and real-time synchronization between CRM modules.
                            </p>
                        </div>

                        {/* Appointment Booking */}
                        <div className="md:col-span-1 bg-[#f2f4f4] rounded-[2.5rem] p-10 flex flex-col min-h-[360px]">
                            <span className="inline-block px-4 py-1.5 bg-white rounded-full text-[10px] font-bold mb-6 self-start">02</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Appointment Booking Flow</h3>
                            <p className="text-[#636e72] text-xs leading-relaxed">
                                end-to-end appointment booking workflow in GoHighLevel, illustrating automated scheduling, lead routing, reminder campaigns, pipeline movement, and booking nurture automation.
                            </p>
                        </div>

                        {/* Efficiency Gain */}
                        <div className="md:col-span-1 bg-[#f9f9f9] border border-[#f2f4f4] rounded-[2.5rem] p-10 flex flex-col justify-center min-h-[360px]">
                            <span className="inline-block px-4 py-1.5 bg-[#f2f4f4] rounded-full text-[10px] font-bold mb-6 self-start">03</span>
                            <h3 className="font-display text-2xl font-bold mb-4">Lead Nurture Automation</h3>
                            <p className="text-[#636e72] text-xs leading-relaxed">
                                GoHighLevel lead nurture automation featuring interconnected workflow nodes, multi-step email and SMS sequences, trigger-based follow-ups, conditional logic paths, and automated lead progression through the pipeline.
                            </p>
                        </div>

                        {/* Decorative Graphic */}
                        <div className="md:col-span-1 bg-[#636e72] rounded-[2.5rem] overflow-hidden min-h-[360px]">
                            <img src="/Asset/frontend.png" alt="Efficiency Graphic" className="w-full h-full object-cover" />
                        </div>

                    </div>
                </div>

                {/* Automation Showcase Folders */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-32">
                    <div className="mb-12">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#636e72] mb-4 block">workflow visualization</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Sample workflows Automations</h2>
                        <p className="text-[#636e72] mt-4 max-w-xl text-sm leading-relaxed">
                            Access the raw architectural diagrams, workflow schematics, and UI snapshots by exploring the secure project directories below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {foldersData.map((folder, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedFolder(folder)}
                                className="bg-white border border-gray-200 shadow-sm rounded-[1.5rem] p-8 text-left hover:shadow-xl hover:border-[#2d3435] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between min-h-[220px]"
                            >
                                <div className="bg-[#2d3435] w-14 h-14 rounded-2xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Folder size={24} className="text-white" />
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-display font-bold text-2xl mb-2 text-[#2d3435]">{folder.title}</h3>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#636e72] block">{folder.type}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-[#f2f4f4] flex flex-wrap justify-between items-center gap-6">
                    <a href="/" className="flex items-center gap-4 group order-1">
                        <ArrowLeft size={16} className="text-[#636e72] group-hover:-translate-x-2 transition-transform" />
                        <div>
                            <div className="text-[8px] uppercase tracking-widest text-[#636e72] mb-1">Previous</div>
                            <div className="font-bold text-sm">Home page</div>
                        </div>
                    </a>

                    <a href="/project/landing-pages" className="flex items-center gap-4 group text-right order-2">
                        <div>
                            <div className="text-[8px] uppercase tracking-widest text-[#636e72] mb-1">Next Project</div>
                            <div className="font-bold text-sm">Landing Pages</div>
                        </div>
                        <ArrowRight size={16} className="text-[#636e72] group-hover:translate-x-2 transition-transform" />
                    </a>

                    <a href="/" className="order-3 w-full md:w-auto md:order-none text-center text-[10px] font-bold uppercase tracking-widest border-b border-[#2d3435] pb-1 hover:text-[#636e72] hover:border-[#636e72] transition-colors">
                        Back to Home
                    </a>
                </div>
            </article>

            {/* Fullscreen Image Lightbox Modal */}
            <AnimatePresence>
                {selectedFolder && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 overflow-y-auto bg-[#2d3435]/95 custom-scrollbar"
                        onClick={() => setSelectedFolder(null)}
                    >
                        {/* Header Area (Sticky) */}
                        <div className="sticky top-0 z-50 flex justify-between items-start p-6 md:p-12 bg-gradient-to-b from-[#2d3435]/90 to-transparent pointer-events-none pb-12">
                            <div className="text-white pointer-events-auto">
                                <h3 className="text-2xl md:text-4xl font-bold font-display tracking-tight">{selectedFolder.title}</h3>
                                <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase mt-2">
                                    {selectedFolder.images.length} {selectedFolder.images.length === 1 ? 'Image' : 'Images'}
                                </p>
                            </div>
                            <button
                                className="text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-4 transition-all duration-300 pointer-events-auto backdrop-blur-md"
                                onClick={(e) => { e.stopPropagation(); setSelectedFolder(null); }}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Image List */}
                        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pb-32 flex flex-col gap-12 md:gap-24" onClick={(e) => e.stopPropagation()}>
                            {selectedFolder.images.map((imgSrc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4), ease: "easeOut" }}
                                    className="w-full bg-[#1e2324] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`Workflow ${idx + 1}`}
                                        className="w-full h-auto object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
