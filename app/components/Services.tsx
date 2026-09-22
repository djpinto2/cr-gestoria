export default function Services() {
  const services = [
    {
      title: "Transferencias Vehiculares",
      description: "Gestión completa de transferencias de dominio"
    },
    {
      title: "Reportes de Deuda",
      description: "Consultas y reportes de deuda vehicular"
    },
    {
      title: "Consultas de Infracciones",
      description: "Investigación de infracciones pendientes"
    },
    {
      title: "Pago de Multas",
      description: "Gestión de pago de infracciones"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-center mb-16">Nuestros Servicios</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl font-semibold text-[var(--gold-2)] mb-2">
                {service.title}
              </h3>
              <p className="text-[var(--txt-2)]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
