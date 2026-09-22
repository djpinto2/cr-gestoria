export default function About() {
  return (
    <section className="py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center mb-12">Sobre Nosotros</h2>
        
        <div className="space-y-6 text-[var(--txt-2)]">
          <p className="text-lg leading-relaxed">
            Somos una gestoría especializada en trámites vehiculares con más de 15 años 
            de trayectoria en Buenos Aires. Nuestro equipo de profesionales está comprometido 
            con brindar soluciones rápidas y eficientes.
          </p>
          
          <p className="text-lg leading-relaxed">
            Ofrecemos servicios 100% online para tu comodidad, con atención personalizada 
            y seguimiento en cada trámite.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[var(--line)]">
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--gold-2)]">15+</p>
              <p className="text-sm text-[var(--txt-3)] mt-2">Años de experiencia</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--gold-2)]">1000+</p>
              <p className="text-sm text-[var(--txt-3)] mt-2">Trámites realizados</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--gold-2)]">100%</p>
              <p className="text-sm text-[var(--txt-3)] mt-2">Online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
