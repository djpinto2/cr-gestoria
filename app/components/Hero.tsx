'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="home" className="hero relative min-h-screen w-full overflow-hidden bg-[var(--bg)] flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src="/img y videos/fondo-web (1).mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-4 max-w-6xl mx-auto w-full">
        <div>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[var(--gold-2)]/20 border border-[var(--gold-2)] text-[var(--gold-2)] rounded-full text-sm font-semibold">
              ✓ 15+ años de experiencia
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--txt-1)]">Gestión Vehicular </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-2)] to-green-400">
              Profesional
            </span>
          </h1>

          <p className="text-lg text-[var(--txt-3)] mb-8 leading-relaxed">
            Somos tu aliado en trámites automotrices. Con más de 15 años de experiencia, brindamos soluciones rápidas, seguras y 100% online para gestionar tu documentación vehicular.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a 
              href="#services" 
              className="px-8 py-4 bg-[var(--gold-2)] text-[var(--bg)] font-bold rounded-lg hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Ver Servicios
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-[var(--gold-2)] text-[var(--gold-2)] font-bold rounded-lg hover:bg-[var(--gold-2)]/10 transition"
            >
              Contactanos
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold-2)]">15+</div>
              <div className="text-sm text-[var(--txt-3)]">Años</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold-2)]">1000+</div>
              <div className="text-sm text-[var(--txt-3)]">Trámites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--gold-2)]">100%</div>
              <div className="text-sm text-[var(--txt-3)]">Online</div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-6">
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold-2)] transition">
            <div className="text-3xl mb-3">🚗</div>
            <h3 className="text-xl font-bold text-[var(--txt-1)] mb-2">Rápido</h3>
            <p className="text-[var(--txt-3)]">Tramitación acelerada con seguimiento en tiempo real</p>
          </div>
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold-2)] transition">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-bold text-[var(--txt-1)] mb-2">Seguro</h3>
            <p className="text-[var(--txt-3)]">Documentación protegida y confidencial</p>
          </div>
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold-2)] transition">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-xl font-bold text-[var(--txt-1)] mb-2">100% Online</h3>
            <p className="text-[var(--txt-3)]">Gestiona desde cualquier lugar en cualquier momento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
