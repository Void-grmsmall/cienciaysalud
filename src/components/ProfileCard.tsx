"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Info, ChevronDown } from "lucide-react";
import gsap from "gsap";

interface ProfileCardProps {
  title: string;
  price: number;
  exams: string[];
  requirement: string;
  highlight?: boolean;
}

export default function ProfileCard({
  title,
  price,
  exams,
  requirement,
  highlight = false,
}: ProfileCardProps) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    gsap.to(bodyRef.current, {
      height: open ? "auto" : 0,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [open]);

  // Initialize collapsed
  useEffect(() => {
    if (bodyRef.current) {
      gsap.set(bodyRef.current, { height: 0 });
    }
  }, []);

  const handleBooking = () => {
    const text = encodeURIComponent(`Hola, me interesa el ${title} de S/. ${price}.`);
    window.open(`https://wa.me/51931906392?text=${text}`, "_blank");
  };

  return (
    <div
      className={`relative flex flex-col h-full rounded-3xl bg-white border transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
        highlight
          ? "border-[var(--color-highlight)] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.3)]"
          : "border-slate-200 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)]"
      }`}
    >
      {highlight && (
        <div className="absolute top-0 right-0 bg-[var(--color-highlight)] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider z-10">
          Más Popular
        </div>
      )}

      {/* Header — always visible */}
      <div className="p-6 pb-4">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
        <div className="flex items-baseline gap-1 text-[var(--color-medical)]">
          <span className="text-xl font-semibold">S/.</span>
          <span className="text-5xl font-black tracking-tight">{price}</span>
        </div>
      </div>

      {/* Toggle accordion */}
      <button
        id={`toggle-${title.replace(/\s+/g, "-").toLowerCase()}`}
        onClick={() => setOpen((prev) => !prev)}
        className="mx-6 mb-2 flex items-center justify-between text-sm font-semibold text-slate-500 uppercase tracking-wider py-2 border-t border-b border-slate-100 hover:text-[var(--color-medical)] transition-colors"
      >
        <span>Ver exámenes ({exams.length})</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Accordion body — GSAP animated */}
      <div ref={bodyRef} className="overflow-hidden">
        <ul className="space-y-3 px-6 py-4">
          {exams.map((exam, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-700">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-nature-light)] flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-[var(--color-nature)]" />
              </div>
              <span className="text-sm leading-tight">{exam}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer — always visible */}
      <div className="mt-auto px-6 pb-6 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-lg mb-4">
          <Info className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="font-medium">Requisito:</span>&nbsp;{requirement}
        </div>

        <button
          id={`book-${title.replace(/\s+/g, "-").toLowerCase()}`}
          onClick={handleBooking}
          className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
            highlight
              ? "bg-[var(--color-medical)] hover:bg-[var(--color-medical-dark)] text-white shadow-md shadow-[var(--color-medical)]/30"
              : "bg-slate-100 hover:bg-[var(--color-medical)] hover:text-white text-slate-800"
          }`}
        >
          Solicitar Perfil
        </button>
      </div>
    </div>
  );
}
