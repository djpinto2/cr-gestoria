'use client';

export default function Strip() {
  const items = ['Informes de dominio','Transferencias','Infracciones CABA y PBA','Multas','Denuncia de venta','Cambio de radicación','Duplicado de cédula','Libre deuda','Altas y bajas'];

  return (
    <div className="border-t border-b border-[var(--line)] bg-[var(--bg-2)] py-5 overflow-hidden">
      <div className="flex gap-13 animate-slide">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-semibold tracking-[0.09em] uppercase text-[var(--txt-3)] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes slide { to { transform: translateX(calc(-50% - 26px)); } } .animate-slide { animation: slide 34s linear infinite; width: max-content; }`}</style>
    </div>
  );
}
