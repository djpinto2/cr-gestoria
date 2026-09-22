export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[var(--bg)]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/img y videos/fondo-web (1).mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-4 py-32">
        <div className="space-y-6">
          {/* Logo */}
          <img 
            src="/img y videos/logo (2).png" 
            alt="CR Gestoría" 
            className="h-16 w-auto mb-6"
          />

          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            CR Gestoría
          </h1>
          <p className="text-xl text-[var(--txt-2)] max-w-2xl">
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
