export default function Hero() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-[var(--bg)] to-[var(--bg-2)]">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            CR Gestoría
          </h1>
          <p className="text-xl text-[var(--txt-2)] leading-relaxed">
            Soluciones integrales en trámites vehiculares y gestión administrativa. 
            Contamos con más de 15 años de experiencia en Buenos Aires.
          </p>
          <div className="flex gap-4 pt-8">
            <button className="btn btn--primary">Contactanos</button>
            <button className="btn btn--secondary">Ver Servicios</button>
          </div>
        </div>
      </div>
    </section>
  );
}
