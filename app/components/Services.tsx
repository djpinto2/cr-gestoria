export default function Services() {
  const services = [
    {
      id: 1,
      icon: "🚗",
      title: "Transferencias Vehiculares",
      description: "Gestión completa de transferencias de dominio con documentación acelerada",
      features: ["Trámite completo", "Seguimiento real-time", "Soporte personalizado"]
    },
    {
      id: 2,
      icon: "📋",
      title: "Reportes de Deuda",
      description: "Consultas y reportes actualizados de deuda vehicular e infracciones",
      features: ["Consultas inmediatas", "Reportes detallados", "100% online"]
    },
    {
      id: 3,
      icon: "⚠️",
      title: "Consultas de Infracciones",
      description: "Investigación exhaustiva de infracciones pendientes y disponibilidad",
      features: ["Búsqueda completa", "Asesoramiento legal", "Rápida resolución"]
    },
    {
      id: 4,
      icon: "💳",
      title: "Pago de Multas",
      description: "Gestión de pago de infracciones y penalidades vehiculares",
      features: ["Múltiples métodos pago", "Planes de financiación", "Comprobantes digitales"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Nuestros Servicios</h2>
          <p className="text-[var(--txt-2)] max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para todos tus trámites vehiculares con la máxima profesionalidad y rapidez
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-lg bg-[var(--surface)] border border-[var(--line)] p-6 hover:border-[var(--gold-2)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--gold-2)]/10"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-2)]/0 to-[var(--gold-2)]/0 group-hover:from-[var(--gold-2)]/5 group-hover:to-transparent transition-all duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-[var(--txt-1)] mb-2">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-[var(--txt-2)] mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[var(--txt-3)]">
                      <span className="text-[var(--gold-2)] font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <a 
                  href="#contact"
                  className="inline-block text-sm font-semibold text-[var(--gold-2)] hover:text-[var(--accent)] transition group-hover:translate-x-2 duration-300"
                >
                  Solicitar Servicio →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-[var(--txt-2)] mb-6">
            ¿Necesitas ayuda con tu trámite vehicular?
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--gold-2)] to-green-400 text-[var(--bg)] font-bold rounded-lg hover:shadow-lg hover:shadow-[var(--gold-2)]/30 transition transform hover:scale-105"
          >
            Contacta con Nosotros
          </a>
        </div>
      </div>
    </section>
  );
}
