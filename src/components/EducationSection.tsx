"use client";

import { motion } from "framer-motion";
import { Info, ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import SectionWave from "./SectionWave";

export default function EducationSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <SectionWave position="top" fillClass="fill-[#fef3c7]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-[var(--color-medical)] font-bold mb-4 tracking-wide uppercase text-sm">
              <Info className="w-5 h-5" />
              <span>Información Educativa</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              ¿Por qué es importante tu <span className="text-[var(--color-medical)]">Perfil Tiroideo</span>?
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              La glándula tiroides regula el metabolismo del cuerpo. Alteraciones en su funcionamiento pueden provocar dos condiciones principales con síntomas muy distintos. Conocerlos puede ayudarte a prevenir complicaciones.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Hipotiroidismo */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <ArrowDown className="w-6 h-6 text-[var(--color-medical)]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Hipotiroidismo</h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">Síntomas frecuentes:</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-medical)]" />
                    Sobrepeso
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-medical)]" />
                    Cansancio extremo
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-medical)]" />
                    Estreñimiento
                  </li>
                </ul>
              </motion.div>

              {/* Hipertiroidismo */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <ArrowUp className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Hipertiroidismo</h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">Síntomas frecuentes:</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Pérdida de peso
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Insomnio
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Diarrea
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/lab-equipment.png"
              alt="Equipamiento de laboratorio clínico"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-medical-dark)]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white border border-white/30 max-w-sm">
                <p className="font-semibold text-lg">Tecnología de Precisión</p>
                <p className="text-sm text-blue-100 mt-1">Utilizamos equipos de última generación para garantizar resultados exactos en tu perfil tiroideo y más de mil exámenes.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
