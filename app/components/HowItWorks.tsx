'use client';

export default function HowItWorks() {
  return (
    <section id="como" className="relative border-t border-b border-[var(--line)] bg-[var(--bg-2)] py-26 px-4 md:px-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover z-10 opacity-20">
          <source src="/img y videos/fondo-web (1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-20 pointer-events-none" style={{
          background: 'linear-gradient(180deg, var(--bg-2) 0%, rgba(8,10,16,.68) 20%, rgba(8,10,16,.68) 80%, var(--bg-2) 100%), radial-gradient(900px 420px at 50% 45%, rgba(233,185,73,.10), transparent 70%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1180px] mx-auto">
        <div className="max-w-[680px] mx-auto mb-14 text-center">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-[var(--gold)]">Cómo funciona</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Tres pasos y listo</h2>
          <p className="text-lg text-[var(--txt-2)]">Sin filas, sin turnos y sin perder el día en una dependencia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: '01', title: 'Completá el formulario', desc: 'Elegís el servicio, cargás los datos del vehículo y tu correo electrónico. Te toma menos de dos minutos.' },
            { n: '02', title: 'Pagá con Mercado Pago', desc: 'Abonás con tarjeta, débito, dinero en cuenta o efectivo desde el botón seguro de Mercado Pago.' },
            { n: '03', title: 'Recibí la respuesta', desc: 'Te enviamos el resultado o el estado del trámite al mail que dejaste, con seguimiento personalizado.' }
          ].map((step, i) => (
            <div key={i} className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-8 hover:border-[rgba(233,185,73,.35)] hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-[rgba(233,185,73,.12)]">
                {step.n}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--txt)]">{step.title}</h3>
              <p className="text-[var(--txt-2)] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
