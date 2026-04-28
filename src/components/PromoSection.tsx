"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Droplet } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import SectionWave from "./SectionWave";

export default function PromoSection() {
  const floatLeft = useRef<HTMLDivElement>(null);
  const floatRight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(floatLeft.current, {
        y: -15,
        rotation: -5,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(floatRight.current, {
        y: -15,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.6,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleBooking = () => {
    const text = encodeURIComponent("Hola, me interesa la Promoción Especial de S/. 20.");
    window.open(`https://wa.me/51931906392?text=${text}`, "_blank");
  };

  return (
    <section
      id="promo"
      className="py-16 md:py-20 bg-[var(--color-highlight-light)] relative overflow-hidden"
    >
      <SectionWave position="top" fillClass="fill-slate-50" />

      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[var(--color-highlight)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-[var(--color-highlight)]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-8">

          {/* ─── IZQUIERDA: imagen chicharrón + card ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-row lg:flex-col items-center gap-4 w-full lg:w-auto order-3 lg:order-1"
          >
            {/* Imagen flotante sin círculo — solo drop-shadow */}
            <div
              ref={floatLeft}
              className="hidden lg:flex w-36 xl:w-44 shrink-0 items-center justify-center
                         drop-shadow-xl"
            >
              <Image
                src="/assets/chicharron.png"
                alt="Chicharrón"
                width={176}
                height={176}
                className="object-contain w-full h-auto"
              />
            </div>

            {/* Card colesterol */}
            <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl
                            bg-white/70 backdrop-blur-sm border border-white
                            shadow-md w-full lg:max-w-xs">
              <div className="bg-red-100 p-2.5 rounded-full shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg leading-snug">
                  Antes de comer un chicharrón...
                </h4>
                <p className="text-slate-600 text-sm sm:text-base">¡Mídase su colesterol!</p>
              </div>
            </div>
          </motion.div>

          {/* ─── CENTRO: badge + título + tarjeta ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-6 w-full max-w-xs sm:max-w-sm mx-auto order-1 lg:order-2"
          >
            <div className="text-center">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5
                              bg-[var(--color-highlight)]/20 text-yellow-800
                              rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase
                              mb-4 border border-[var(--color-highlight)]/30">
                Promoción Vigente
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
                             font-extrabold text-slate-900 leading-tight text-center">
                Prevenir es mejor que curar.
              </h2>
            </div>

            {/* Tarjeta oferta */}
            <div className="bg-white p-5 sm:p-7 md:p-8 rounded-[2rem] sm:rounded-[2.5rem]
                            shadow-[0_20px_60px_-15px_rgba(245,158,11,0.25)]
                            border-2 border-[var(--color-highlight)]/30
                            text-center relative w-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                              bg-[var(--color-highlight)] text-white
                              px-4 sm:px-6 py-1.5 sm:py-2
                              rounded-full font-bold shadow-lg
                              text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap">
                Oferta Especial
              </div>

              <div className="mt-4 mb-4 sm:my-6">
                <p className="text-slate-500 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-1 sm:mb-2">
                  Por solo
                </p>
                <div className="flex items-start justify-center gap-1 text-[var(--color-highlight)]">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 sm:mt-2">S/.</span>
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none">20</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-5 sm:mb-8 text-left">
                <p className="font-bold text-slate-800 text-sm sm:text-base mb-3 sm:mb-4 border-b pb-2">
                  Incluye 3 exámenes vitales:
                </p>
                <ul className="space-y-2 sm:space-y-3 font-medium text-slate-600 text-sm sm:text-base">
                  {["Glucosa", "Colesterol", "Triglicéridos"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-nature)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                id="promo-book-btn"
                onClick={handleBooking}
                className="w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white
                           bg-slate-900 hover:bg-[var(--color-medical-dark)]
                           shadow-xl shadow-slate-900/20
                           transition-all hover:-translate-y-1 duration-300
                           active:scale-[0.98]"
              >
                Aprovechar Promoción
              </button>
            </div>
          </motion.div>

          {/* ─── DERECHA: imagen gaseosa + card ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row lg:flex-col items-center gap-4 w-full lg:w-auto order-4 lg:order-3"
          >
            {/* Imagen flotante sin círculo */}
            <div
              ref={floatRight}
              className="hidden lg:flex w-36 xl:w-44 shrink-0 items-center justify-center
                         drop-shadow-xl"
            >
              <Image
                src="/assets/gaseosa.png"
                alt="Gaseosa"
                width={176}
                height={176}
                className="object-contain w-full h-auto"
              />
            </div>

            {/* Card glucosa */}
            <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl
                            bg-white/70 backdrop-blur-sm border border-white
                            shadow-md w-full lg:max-w-xs">
              <div className="bg-blue-100 p-2.5 rounded-full shrink-0">
                <Droplet className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-base sm:text-lg leading-snug">
                  Antes de tomar una gaseosa...
                </h4>
                <p className="text-slate-600 text-sm sm:text-base">¡Mídase su glucosa!</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}