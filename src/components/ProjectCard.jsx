import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ title, tags, description, image, linkTo, offset = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-card p-6 md:p-8 rounded-[2.5rem] ${offset ? 'md:mt-24' : ''}`}
        >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-contrast mb-8">
                <img src={image} alt={title} className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex gap-2 mb-4">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-[9px] uppercase tracking-widest bg-contrast text-accent rounded-full font-bold">
                        {tag}
                    </span>
                ))}
            </div>
            <h3 className="font-display text-3xl font-bold mb-3">{title}</h3>
            <p className="text-accent text-sm leading-relaxed mb-6">{description}</p>
            {linkTo ? (
                <Link to={linkTo} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:gap-4 transition-all">
                    View Project <ArrowRight size={14} />
                </Link>
            ) : (
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:gap-4 transition-all">
                    View Project <ArrowRight size={14} />
                </button>
            )}
        </motion.div>
    );
}