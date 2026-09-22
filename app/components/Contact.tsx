export default function Contact() {
  return (
    <section className="py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center mb-16">Contactanos</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[var(--gold-2)] mb-2">Email</h3>
              <p className="text-[var(--txt-2)]">info@crgestoria.com.ar</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--gold-2)] mb-2">Teléfono</h3>
              <p className="text-[var(--txt-2)]">+54 (11) XXXX-XXXX</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--gold-2)] mb-2">WhatsApp</h3>
              <p className="text-[var(--txt-2)]">Disponible para consultas</p>
            </div>
          </div>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Tu nombre"
              className="w-full px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--txt)] focus:outline-none focus:border-[var(--gold-2)]"
            />
            <input 
              type="email" 
              placeholder="Tu email"
              className="w-full px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--txt)] focus:outline-none focus:border-[var(--gold-2)]"
            />
            <textarea 
              placeholder="Tu mensaje"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--txt)] focus:outline-none focus:border-[var(--gold-2)]"
            />
            <button className="btn btn--primary w-full">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
