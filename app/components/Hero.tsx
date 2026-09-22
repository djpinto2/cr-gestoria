'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden py-32 px-4 md:py-0 md:px-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-[#1B2438] to-[#0A0D14]" />

        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img y videos/poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-10 opacity-90"
        >
          <source src="/img y videos/fondo-web (1).mp4" type="video/mp4" />
        </video>

        {/* Overlay gradients */}
        <div className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: `
              linear-gradient(100deg, rgba(6,8,13,.86) 0%, rgba(6,8,13,.55) 45%, rgba(6,8,13,.15) 78%, rgba(6,8,13,.35) 100%),
              linear-gradient(to top, var(--bg) 0%, rgba(6,8,13,.15) 30%, transparent 55%)
            `
          }}
        />

        {/* Glow */}
        <div
          className="absolute z-10 w-[620px] h-[620px] -right-[140px] top-[6%] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(233,185,73,.16), transparent 62%)',
            filter: 'blur(30px)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-[1180px] mx-auto px-6 md:px-0">
        <div className="max-w-[730px]">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[rgba(233,185,73,.12)] border border-[rgba(233,185,73,.3)]">
            <span
              className="w-[7px] h-[7px] rounded-full bg-[var(--gold)]"
              style={{
                animation: 'pulse 2.2s infinite',
                boxShadow: '0 0 0 0 rgba(233,185,73,.7)'
              }}
            />
            <span className="text-xs font-semibold text-[var(--gold-2)] tracking-wider">
              Gestoría matriculada · Buenos Aires · 100% online
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tu trámite del automotor,
            <em className="block font-extrabold mt-2" style={{
              background: 'linear-gradient(120deg, var(--gold-2), var(--gold) 55%, #C9922B)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              resuelto sin moverte
            </em>
            de tu casa.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[var(--txt-2)] mb-9 max-w-[600px] leading-relaxed">
            Informes de dominio, transferencias, infracciones y multas. Cargás tus datos, pagás con Mercado Pago y recibís todo por mail. Simple, rápido y con seguimiento real de una persona.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-13">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-[var(--gold-2)] to-[var(--gold)] text-[#14100A] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Ver servicios
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base bg-[rgba(255,255,255,.04)] border border-[rgba(255,255,255,.16)] text-[var(--txt)] hover:bg-[rgba(255,255,255,.09)] hover:border-[rgba(255,255,255,.3)] backdrop-blur-sm transition-all"
              data-wa="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1.1 1.1-1 2.5-.1 4.1 1.7 2.7 3 3.8 5.8 5 1.2.5 2.2.6 2.9.4.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.5-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/>
              </svg>
              Consultar por WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[rgba(255,255,255,.045)] border border-[var(--line)] backdrop-blur-sm text-xs text-[var(--txt-2)] font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--gold)]">
                <path d="M12 2 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/>
              </svg>
              Datos protegidos
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[rgba(255,255,255,.045)] border border-[var(--line)] backdrop-blur-sm text-xs text-[var(--txt-2)] font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--gold)]">
                <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
              </svg>
              Respuesta en el día
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[rgba(255,255,255,.045)] border border-[var(--line)] backdrop-blur-sm text-xs text-[var(--txt-2)] font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--gold)]">
                <rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/>
              </svg>
              Pago seguro con MP
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[rgba(255,255,255,.045)] border border-[var(--line)] backdrop-blur-sm text-xs text-[var(--txt-2)] font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--gold)]">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              +10 años experiencia
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-[var(--txt-3)] text-xs tracking-widest uppercase flex flex-col items-center gap-2">
        <span>Deslizá</span>
        <div
          className="w-0.5 h-9"
          style={{
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            animation: 'sc 2s ease-in-out infinite'
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          70% { box-shadow: 0 0 0 9px rgba(233,185,73,0); }
          100% { box-shadow: 0 0 0 0 rgba(233,185,73,0); }
        }
        @keyframes sc {
          0%, 100% { opacity: 0.25; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
