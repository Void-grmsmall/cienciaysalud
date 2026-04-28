"use client";

import { Target, Eye } from "lucide-react";
import SectionWave from "./SectionWave";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <SectionWave position="top" fillClass="fill-slate-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase mb-4 border border-blue-100">
            Nuestro Propósito
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Comprometidos con tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical)] to-blue-400">Bienestar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Misión */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
            <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Nuestra Misión</h3>
            <p className="text-slate-600 leading-relaxed text-lg relative z-10">
              Brindar servicios de diagnóstico clínico confiables, rápidos y de alta calidad, mediante tecnología de vanguardia y personal especializado, ofreciendo una atención eficiente y personalizada que contribuya al bienestar y la satisfacción de nuestros pacientes.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-nature)]/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
            <div className="w-16 h-16 bg-white text-[var(--color-nature-dark)] rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Nuestra Visión</h3>
            <p className="text-slate-600 leading-relaxed text-lg relative z-10">
              Ser el laboratorio clínico privado líder en la región, reconocido por su excelencia, innovación y confianza, destacando por la precisión de nuestros resultados y la calidad de nuestro servicio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
