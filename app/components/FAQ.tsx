'use client';

import { useState } from 'react';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden transition-all ${open ? 'border-[rgba(233,185,73,.4)]' : ''}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-lg hover:bg-[rgba(233,185,73,.05)] transition-colors">
        {q}
        <span className={`w-6 h-6 border rounded-full flex items-center justify-center text-[var(--gold)] border-[var(--line-strong)] transition-transform ${open ? 'rotate-45 bg-[var(--gold-dim)]' : ''}`}>+</span>
      </button>
      {open && <div className="px-6 pb-5 text-[var(--txt-2)] text-sm">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  const items = [
    ["¿Necesito ir a algún lado?","No. Todo el proceso es online: completás el formulario, pagás con Mercado Pago y recibís la respuesta por mail."],
    ["¿Cuánto tardan?","Los informes y consultas se resuelven entre 24 y 48 horas hábiles."],
    ["¿Cómo pago?","Con el botón de Mercado Pago. Podés usar tarjeta, débito, dinero en cuenta o efectivo."],
    ["¿Cuánto sale cada trámite?","Te pasamos el valor exacto apenas nos contás tu caso, siempre antes de que pagues."],
    ["¿Qué pasa si me equivoqué?","Escribinos por WhatsApp con el comprobante de pago y lo corregimos sin costo."],
    ["¿Trabajan en toda PBA?","Sí, cubrimos CABA y toda la Provincia de Buenos Aires."]
  ];
  return (
    <section id="faq" className="bg-[var(--bg-2)] border-t border-b border-[var(--line)] py-26 px-4">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[680px] mx-auto mb-14 text-center">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-[var(--gold)]">Preguntas frecuentes</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Lo que más nos consultan</h2>
        </div>
        <div className="max-w-[830px] mx-auto space-y-3">
          {items.map((item, i) => (
            <FAQItem key={i} q={item[0]} a={item[1]} />
          ))}
        </div>
      </div>
    </section>
  );
}
