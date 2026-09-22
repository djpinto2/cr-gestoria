export default function About() {
  const achievements = [
    {
      number: '15+',
      label: 'Años de experiencia',
      description: 'Trayectoria consolidada en gestión vehicular'
    },
    {
      number: '1000+',
      label: 'Trámites realizados',
      description: 'Casos exitosos y satisfacción garantizada'
    },
    {
      number: '100%',
      label: 'Online',
      description: 'Acceso desde cualquier dispositivo'
    },
    {
      number: '24/7',
      label: 'Disponibilidad',
      description: 'Soporte permanente para tus consultas'
    }
  ];

  const values = [
    {
      icon: '⚡',
      title: 'Rapidez',
      description: 'Tramitación acelerada sin comprometer la calidad'
    },
    {
      icon: '🔒',
      title: 'Seguridad',
      description: 'Máxima protección de tu documentación'
    },
    {
      icon: '💼',
      title: 'Profesionalismo',
      description: 'Equipo certificado y capacitado'
    },
    {
      icon: '🤝',
      title: 'Transparencia',
      description: 'Comunicación clara en cada paso'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Sobre Nosotros</h2>
          <p className="text-[var(--txt-2)] max-w-2xl mx-auto">
            Líderes en soluciones de trámites vehiculares con experiencia demostrada
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[var(--txt-1)] mb-6">
              Quiénes Somos
            </h3>
            <p className="text-[var(--txt-2)] mb-4 leading-relaxed">
              Somos una gestoría especializada en trámites vehiculares con más de 15 años de trayectoria 
              en Buenos Aires. Nuestro equipo de profesionales está comprometido con brindar soluciones 
              rápidas, eficientes y confiables para todos tus trámites automotrices.
            </p>
            <p className="text-[var(--txt-2)] mb-4 leading-relaxed">
              Nos distingue nuestro enfoque 100% online, que permite que nuestros clientes gestionen 
              sus trámites desde cualquier lugar y en cualquier momento, sin complicaciones ni papeleo innecesario.
            </p>
            <p className="text-[var(--txt-2)] leading-relaxed">
              Tu confianza es nuestro mayor activo. Por eso trabajamos con transparencia, seguridad 
              y profesionalismo en cada uno de nuestros procesos.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold-2)] transition group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-[var(--txt-1)] mb-2">
                  {value.title}
                </h4>
                <p className="text-xs text-[var(--txt-3)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-12">
          <h3 className="text-2xl font-bold text-center text-[var(--txt-1)] mb-12">
            Nuestros Logros
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-2)] to-green-400 mb-3 group-hover:scale-110 transition">
                  {achievement.number}
                </div>
                <h4 className="font-semibold text-[var(--txt-1)] mb-2">
                  {achievement.label}
                </h4>
                <p className="text-sm text-[var(--txt-3)]">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--txt-2)] mb-6">
            ¿Listo para confiar tu trámite a los profesionales?
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--gold-2)] to-green-400 text-[var(--bg)] font-bold rounded-lg hover:shadow-lg hover:shadow-[var(--gold-2)]/30 transition transform hover:scale-105"
          >
            Solicitar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
