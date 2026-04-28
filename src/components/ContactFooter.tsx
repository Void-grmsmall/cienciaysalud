"use client";

import { MapPin, Phone, Clock, TestTube, CheckCircle } from "lucide-react";

export default function ContactFooter() {
  const advantages = [
    "Más de mil exámenes disponibles",
    "Precios cómodos y accesibles",
    "Recojo de muestras a domicilio 24/7",
    "Resultados rápidos (48 horas)",
    "Ubicación estratégica en Rímac, Lima"
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden" id="contacto">
      {/* Top Banner with Advantages */}
      <div className="bg-[var(--color-medical-dark)] relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-nature)] shrink-0" />
                <span className="text-sm font-medium text-white">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">CIENCIA Y SALUD</h2>
              <p className="text-slate-400">Laboratorio Clínico de confianza</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--color-nature)]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Visítanos</h4>
                  <p>Calle 3, N° 801</p>
                  <p>Urb. La Florida, Rímac - Lima</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl shrink-0">
                  <Phone className="w-6 h-6 text-[var(--color-nature)]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Llámanos o escríbenos</h4>
                  <p className="text-2xl font-bold text-[var(--color-highlight)] tracking-wider">931 906 392</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl shrink-0">
                  <Clock className="w-6 h-6 text-[var(--color-nature)]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Horarios de Atención</h4>
                  <p>Lunes a Sábado: 7:00 AM - 4:00 PM</p>
                  <p className="text-[var(--color-highlight)] text-sm font-semibold mt-1">Servicio a domicilio: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-800">
            {/* Using a standard Google Maps embed for Rimac, Lima */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.0305716!3d-12.0246118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf47281b2b4b%3A0x7aafa542b81cab1!2sC.%203%20801%2C%20R%C3%ADmac%2015094!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20 text-center py-6">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Ciencia y Salud Laboratorio Clínico. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}