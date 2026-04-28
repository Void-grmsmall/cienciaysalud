"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

import SectionWave from "./SectionWave";

export default function Hero() {
  const isotipoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        isotipoRef.current,
        { opacity: 0, scale: 0.85, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" }
      ).fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToProfiles = () => {
    document.getElementById("perfiles")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/51931906392?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20an%C3%A1lisis",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16 md:pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.png"
          alt="Laboratorio Clínico"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-medical-dark)]/85 via-slate-900/70 to-[var(--color-nature-dark)]/60" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* Isotipo — simple fade + scale, no glass circle */}
          <div ref={isotipoRef} className="opacity-0 shrink-0">
            <Image
              src="/assets/Isotipo.png"
              alt="Isotipo Ciencia y Salud"
              width={240}
              height={240}
              className="object-contain drop-shadow-[0_0_30px_rgba(37,99,235,0.45)] lg:w-[300px] lg:h-[300px]"
              priority
            />
          </div>

          {/* Text */}
          <div ref={textRef} className="text-center lg:text-left text-white max-w-2xl opacity-0">
            <div className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide">
              🧪 Recojo de muestras a domicilio 24/7
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="block text-[var(--color-highlight-light)]">CIENCIA Y SALUD</span>
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl font-light text-slate-200">
                Laboratorio Clínico
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
              Más de{" "}
              <span className="text-white font-semibold">mil exámenes</span> a
              precios cómodos y resultados confiables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                id="hero-whatsapp-btn"
                onClick={openWhatsApp}
                className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-nature)] hover:bg-[var(--color-nature)]/90 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <MessageCircle className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Agendar por WhatsApp</span>
              </button>

              <button
                id="hero-profiles-btn"
                onClick={scrollToProfiles}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
              >
                <FileText className="w-5 h-5" />
                <span>Ver perfiles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>
        </div>
      </div>

      <SectionWave position="bottom" fillClass="fill-white" />
    </section>
  );
}
