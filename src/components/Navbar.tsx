"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Perfiles", href: "#perfiles" },
  { label: "¿Por qué nosotros?", href: "#why-us" },
  { label: "Promoción", href: "#promo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-medical-dark)]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-3 group"
              id="navbar-logo"
            >
              <Image
                src="/assets/Isotipo.png"
                alt="Ciencia y Salud Logo"
                width={40}
                height={40}
                className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm tracking-wide">
                  CIENCIA Y SALUD
                </span>
                <span className="block text-blue-200 text-xs font-light">
                  Laboratorio Clínico
                </span>
              </div>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  id={`nav-${link.href.replace("#", "")}`}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              id="navbar-whatsapp-cta"
              href="https://wa.me/51931906392?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[var(--color-nature)] hover:bg-[var(--color-nature)]/90 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-emerald-900/30"
            >
              <MessageCircle className="w-4 h-4" />
              931 906 392
            </a>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[var(--color-medical-dark)] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/Isotipo.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-white font-bold text-sm">CIENCIA Y SALUD</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Cerrar menú"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col gap-1 p-4" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <button
                key={link.href}
                id={`mobile-nav-${link.href.replace("#", "")}`}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3.5 text-base font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="absolute bottom-8 left-4 right-4">
            <a
              id="mobile-whatsapp-cta"
              href="https://wa.me/51931906392?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--color-nature)] text-white rounded-xl font-semibold transition-all hover:bg-[var(--color-nature)]/90"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
