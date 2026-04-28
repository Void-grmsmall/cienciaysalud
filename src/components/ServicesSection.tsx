"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import { Activity, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  {
    title: "Perfil 100",
    price: 100,
    exams: [
      "Glucosa",
      "Colesterol",
      "Triglicéridos",
      "Perfil hepático",
      "Hemograma",
      "Urea",
      "Creatinina",
    ],
    requirement: "En ayunas",
    highlight: true,
  },
  {
    title: "Perfil Diabético",
    price: 160,
    exams: [
      "Glucosa basal",
      "Colesterol",
      "Triglicéridos",
      "Insulina basal",
      "Hemoglobina glicosilada (HbA1c)",
      "Urea",
      "Creatinina",
      "Examen de orina",
    ],
    requirement: "Ninguno",
  },
  {
    title: "Perfil Prediabético",
    price: 220,
    exams: [
      "Glucosa basal",
      "Tolerancia glucosa/insulina",
      "Hemoglobina glicosilada (HbA1c)",
      "Colesterol",
      "Triglicéridos",
      "Examen de orina",
    ],
    requirement: "Ninguno",
  },
  {
    title: "Perfil Tiroideo",
    price: 80,
    exams: ["T3", "T4", "TSH"],
    requirement: "No necesita ayuno",
  },
];

export default function ServicesSection() {
  const counterAntibioticosRef = useRef<HTMLSpanElement>(null);
  const counterHorasRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateCounter = (
        el: HTMLSpanElement | null,
        target: number,
        suffix = ""
      ) => {
        if (!el) return;
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: "power2.out",
          snap: { value: 1 },
          onUpdate: () => {
            el.textContent = Math.round(obj.value) + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      };

      animateCounter(counterAntibioticosRef.current, 18);
      animateCounter(counterHorasRef.current, 48);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="perfiles" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-medical)] font-bold tracking-wide uppercase text-sm mb-3">
            Nuestros Servicios
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Perfiles de Análisis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical)] to-[var(--color-nature)]">
              Especializados
            </span>
          </h3>
          <p className="text-lg text-slate-600">
            Encuentra el perfil ideal para ti con exámenes completos y precisos para cuidar tu salud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProfileCard {...profile} />
            </motion.div>
          ))}
        </div>

        {/* Servicio Destacado: Urocultivo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[var(--color-medical-dark)] to-[var(--color-medical)] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[var(--color-nature)]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
                <Activity className="w-4 h-4 text-[var(--color-highlight)]" />
                <span>Servicio Destacado de Emergencia</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Urocultivo con Antibiograma
              </h4>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Análisis completo para infecciones urinarias, evaluando la sensibilidad ante{" "}
                <span className="font-bold text-white">
                  <span ref={counterAntibioticosRef}>18</span> tipos de antibióticos
                </span>{" "}
                para garantizar el tratamiento correcto.
              </p>

              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl w-fit border border-white/10">
                <div className="bg-[var(--color-highlight)] p-3 rounded-full text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Tiempo de entrega</p>
                  <p className="text-xl font-bold">
                    Resultados en{" "}
                    <span ref={counterHorasRef}>48</span> horas
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full">
                <h5 className="font-semibold text-lg mb-4 border-b border-white/20 pb-4">
                  Panel de Sensibilidad (18 Antibióticos)
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm text-blue-50">
                  {[
                    "Amoxicilina/Ácido clavulánico",
                    "Cefaclor",
                    "Amikacina",
                    "Gentamicina",
                    "Ciprofloxacino",
                    "Sulfametoxasol",
                    "Ceftriaxona",
                    "Vancomicina",
                    "Levofloxacino",
                    "Meripenem",
                    "Imipenem",
                    "Fosfomicina",
                    "Piperacilina",
                    "Cefoxitina",
                    "Nitrofurantoína",
                    "Cefepime",
                    "Ceftazidima",
                    "Ampicilina",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-nature)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
