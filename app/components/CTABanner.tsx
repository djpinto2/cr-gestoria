'use client';

export default function CTABanner() {
  return (
    <section className="py-0 px-4">
      <div className="max-w-[1180px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(233,185,73,.24)] bg-gradient-to-r from-[rgba(233,185,73,.13)] via-[rgba(233,185,73,.02)] to-transparent px-11 py-14 text-center md:px-44 md:py-56">
          <div className="absolute -right-40 -top-48 z-0 w-[460px] h-[460px] rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(233,185,73,.2), transparent 65%)'}} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Tenés dudas antes de empezar?</h2>
            <p className="text-lg text-[var(--txt-2)] max-w-[560px] mx-auto mb-8">Contanos tu caso y te decimos exactamente qué trámite necesitás, cuánto sale y cuánto tarda. La consulta es sin cargo.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[var(--gold-2)] to-[var(--gold)] text-[#14100A] hover:shadow-xl hover:-translate-y-0.5 transition-all" data-wa>Hablar por WhatsApp</a>
              <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold bg-[rgba(255,255,255,.04)] border border-[rgba(255,255,255,.16)] text-[var(--txt)] hover:bg-[rgba(255,255,255,.09)] transition-all">Escribir un mensaje</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
