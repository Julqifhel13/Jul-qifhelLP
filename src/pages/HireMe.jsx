import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Mail, MapPin, Clock, CheckCircle2, Workflow, LayoutTemplate, Sparkles, Send } from 'lucide-react';

const services = [
    {
        icon: Workflow,
        title: 'GHL Workflow Automation',
        description: 'End-to-end automation systems that nurture leads, trigger follow-ups, and remove manual tasks across your CRM.',
        deliverables: ['Lead capture & routing', 'Multi-step nurture sequences', 'Behavioral triggers']
    },
    {
        icon: LayoutTemplate,
        title: 'Funnels & Landing Pages',
        description: 'Conversion-focused pages built with clear messaging, strong visuals, and a single goal-driven CTA.',
        deliverables: ['UI/UX design', 'Responsive build', 'A/B-ready structure']
    },
    {
        icon: Sparkles,
        title: 'AI-Powered Systems',
        description: 'Prompt-engineered tooling and AI-assisted design workflows that compress timelines without sacrificing quality.',
        deliverables: ['Prompt engineering', 'AI-assisted design', 'Custom integrations']
    }
];

const process = [
    { step: '01', title: 'Discovery Call', description: 'A 30-minute call to understand your business, goals, and current bottlenecks.' },
    { step: '02', title: 'Proposal & Scope', description: 'A clear written proposal with deliverables, timeline, and pricing — no surprises.' },
    { step: '03', title: 'Build & Iterate', description: 'I build in milestones with weekly check-ins so you see progress, not just promises.' },
    { step: '04', title: 'Launch & Handoff', description: 'Full documentation, walkthroughs, and a 14-day support window after launch.' }
];

export default function HireMe() {
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New project inquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
        );
        window.location.href = `mailto:hello@julqifhel.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <main className="bg-[#f9f9f9] min-h-screen text-[#2d3435]">
            {/* Hero */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex justify-between items-end mb-6 flex-wrap gap-4">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72]">Let's Work Together</span>
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] italic">
                            Booking · <span className="not-italic text-sm">Q2 / Q3 2026</span>
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-10 max-w-5xl">
                        Hire Me to<br />Build Your System.
                    </h1>
                    <p className="text-lg md:text-xl text-[#636e72] leading-relaxed max-w-2xl font-light">
                        I help businesses replace manual workflows with automation that pays for itself. Tell me about your project below and I'll get back within 24 hours.
                    </p>
                </motion.div>
            </section>

            {/* Quick Info Strip */}
            <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <div className="bg-white rounded-[2rem] p-8 border border-[#f2f4f4] shadow-sm flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[#f2f4f4] flex items-center justify-center shrink-0">
                            <Clock size={20} className="text-[#2d3435]" />
                        </div>
                        <div>
                            <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] block mb-1">Response Time</span>
                            <p className="font-display text-xl font-bold">Within 24 hours</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-[2rem] p-8 border border-[#f2f4f4] shadow-sm flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[#f2f4f4] flex items-center justify-center shrink-0">
                            <MapPin size={20} className="text-[#2d3435]" />
                        </div>
                        <div>
                            <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] block mb-1">Working With</span>
                            <p className="font-display text-xl font-bold">Clients Worldwide</p>
                        </div>
                    </div>
                    <div className="bg-[#2d3435] text-white rounded-[2rem] p-8 shadow-sm flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                            <Mail size={20} className="text-white" />
                        </div>
                        <div>
                            <span className="text-[10px] tracking-widest uppercase font-bold text-white/50 block mb-1">Direct Email</span>
                            <p className="font-display text-xl font-bold">hello@julqifhel.com</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Services */}
            <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-4 block">What You Get</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Services Designed Around Outcomes.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-[#f2f4f4] shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col">
                                    <div className="w-14 h-14 rounded-2xl bg-[#f2f4f4] flex items-center justify-center mb-8">
                                        <Icon size={22} className="text-[#2d3435]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-[#636e72] text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
                                    <ul className="space-y-3 border-t border-[#f2f4f4] pt-6">
                                        {service.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs text-[#2d3435]">
                                                <CheckCircle2 size={14} className="text-[#2d3435] shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* Process */}
            <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    className="bg-[#2d3435] text-white rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>
                    <div className="relative z-10">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-white/50 mb-4 block">How We Work</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 max-w-3xl">A Predictable, Transparent Process.</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((p, idx) => (
                                <div key={idx} className="relative">
                                    <span className="font-display text-5xl font-bold text-white/10 block mb-4">{p.step}</span>
                                    <h4 className="font-display text-xl font-bold mb-3">{p.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-12"
                >
                    <div className="lg:col-span-2">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-4 block">Start a Project</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-[1]">Tell Me About<br />Your Project.</h2>
                        <p className="text-[#636e72] leading-relaxed mb-8 max-w-md">
                            Share a few details and I'll get back within 24 hours with next steps. The more context you give, the better I can scope.
                        </p>
                        <div className="border-t border-[#f2f4f4] pt-8 space-y-4">
                            <div>
                                <span className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] block mb-1">Prefer Email?</span>
                                <a href="mailto:hello@julqifhel.com" className="font-display text-lg font-bold hover:text-[#636e72] transition-colors">hello@julqifhel.com</a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#f2f4f4] shadow-sm">
                        {submitted ? (
                            <div className="flex flex-col items-center text-center py-16">
                                <div className="w-16 h-16 rounded-full bg-[#2d3435] flex items-center justify-center mb-6">
                                    <CheckCircle2 size={28} className="text-white" />
                                </div>
                                <h3 className="font-display text-3xl font-bold mb-4">Message Drafted</h3>
                                <p className="text-[#636e72] max-w-md">Your email client should have opened with the message ready to send. If it didn't, email me directly at hello@julqifhel.com.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-2 block" htmlFor="name">Name *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            className="w-full bg-[#f9f9f9] border border-[#f2f4f4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d3435] transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-2 block" htmlFor="email">Email *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full bg-[#f9f9f9] border border-[#f2f4f4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d3435] transition-colors"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-2 block" htmlFor="company">Company</label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        value={form.company}
                                        onChange={handleChange}
                                        className="w-full bg-[#f9f9f9] border border-[#f2f4f4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d3435] transition-colors"
                                        placeholder="Where do you work?"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-2 block" htmlFor="service">Service Needed</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            className="w-full bg-[#f9f9f9] border border-[#f2f4f4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d3435] transition-colors"
                                        >
                                            <option value="">Select a service…</option>
                                            <option>GHL Workflow Automation</option>
                                            <option>Funnels & Landing Pages</option>
                                            <option>AI-Powered Systems</option>
                                            <option>Not sure yet</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-2 block" htmlFor="budget">Budget Range</label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={form.budget}
                                            onChange={handleChange}
                                            className="w-full bg-[#f9f9f9] border border-[#f2f4f4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d3435] transition-colors"
                                        >
                                            <option value="">Pick a range…</option>
                                            <option>Under $1,000</option>
                                            <option>$1,000 – $3,000</option>
                                            <option>$3,000 – $7,500</option>
                                            <option>$7,500+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] tracking-widest uppercase font-bold text-[#636e72] mb-2 block" htmlFor="message">Project Details *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full bg-[#f9f9f9] border border-[#f2f4f4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d3435] transition-colors resize-none"
                                        placeholder="What are you trying to build, and what's getting in the way today?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-[#2d3435] text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(45,52,53,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    <span>Send Inquiry</span>
                                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </form>
                </motion.div>
            </section>

            {/* Footer Navigation */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-[#f2f4f4] flex justify-between items-center flex-wrap gap-6">
                <Link to="/" className="flex items-center gap-4 group">
                    <ArrowLeft size={16} className="text-[#636e72] group-hover:-translate-x-2 transition-transform" />
                    <div>
                        <div className="text-[8px] uppercase tracking-widest text-[#636e72] mb-1">Back to</div>
                        <div className="font-bold text-sm">Home</div>
                    </div>
                </Link>

                <Link to="/project/landing-pages" className="flex items-center gap-4 group text-right">
                    <div>
                        <div className="text-[8px] uppercase tracking-widest text-[#636e72] mb-1">Explore</div>
                        <div className="font-bold text-sm">Landing Pages</div>
                    </div>
                    <ArrowRight size={16} className="text-[#636e72] group-hover:translate-x-2 transition-transform" />
                </Link>
            </section>
        </main>
    );
}
