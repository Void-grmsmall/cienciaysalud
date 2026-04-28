"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Home,
  BadgeCheck,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWave from "./SectionWave";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: FlaskConical,
    number: "1000+",
    label: "exámenes",
    title: "Más de mil exámenes",
    description:
      "Amplio catálogo de análisis clínicos para cualquier necesidad de salud, desde exámenes básicos hasta especializados.",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Home,
    number: "24/7",
    label: "",
    title: "Recojo a domicilio",
    description:
      "Servicio de toma de muestras en la comodidad de tu hogar, disponible las 24 horas, los 7 días de la semana.",
    color: "from-emerald-400 to-green-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    number: "48",
    label: "horas",
    title: "Resultados rápidos",
    description:
      "Tecnología de precisión y procesos optimizados para entregarte tus resultados en el menor tiempo posible.",
    color: "from-amber-400 to-yellow-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: BadgeCheck,
    number: "100%",
    label: "confiable",
    title: "Calidad certificada",
    description:
      "Equipos de última generación y personal altamente capacitado para garantizarte resultados exactos y confiables.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

export default function WhyUs() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const raw = reasons[i].number;

        // Only animate if it's a simple number (possibly with a suffix at the end)
        // This prevents issues with values like "24/7"
        const isCounter = /^\d+(\.\d+)?[^0-9]*$/.test(raw);
        if (!isCounter) return;

        const numericPart = parseFloat(raw.replace(/[^0-9.]/g, ""));
        const suffix = raw.replace(/[0-9.]/g, "");

        const obj = { value: 0 };
        gsap.to(obj, {
          value: numericPart,
          duration: 2,
          ease: "power2.out",
          snap: { value: numericPart % 1 === 0 ? 1 : 0.1 },
          onUpdate: () => {
            const display =
              numericPart % 1 === 0
                ? Math.round(obj.value).toString()
                : obj.value.toFixed(0);
            el.textContent = display + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <SectionWave position="top" fillClass="fill-white" />
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-medical)] font-bold tracking-wide uppercase text-sm mb-3">
            Nuestra Diferencia
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            ¿Por qué{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-[var(--color-nature)]">
              elegirnos?
            </span>
          </h3>
          <p className="text-lg text-slate-600">
            Más de mil familias en Rímac confían en nuestros servicios. Descubre
            por qué somos el laboratorio de referencia en la zona.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.1)] border border-slate-100 hover:border-transparent hover:shadow-[0_20px_50px_-15px_rgba(15,23,42,0.15)] transition-all duration-300 flex flex-col"
              >
                {/* Gradient top border on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 ${reason.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-8 h-8 ${reason.iconColor}`} />
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <span
                    ref={(el) => { counterRefs.current[index] = el; }}
                    className={`text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${reason.color}`}
                  >
                    {reason.number}
                  </span>
                  {reason.label && (
                    <span className="text-slate-400 text-sm font-medium ml-1">
                      {reason.label}
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  {reason.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
