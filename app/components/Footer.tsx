

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-2)] border-t border-[var(--line)] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold text-[var(--gold-2)] mb-4">CR Gestoría</h4>
            <p className="text-sm text-[var(--txt-2)] leading-relaxed mb-4">
              Soluciones profesionales en trámites vehiculares desde 2009. Confiabilidad y rapidez garantizadas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--gold-2)] hover:border-[var(--gold-2)] transition hover:bg-[var(--gold-2)]/10">
                f
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--gold-2)] hover:border-[var(--gold-2)] transition hover:bg-[var(--gold-2)]/10">
                𝕏
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--gold-2)] hover:border-[var(--gold-2)] transition hover:bg-[var(--gold-2)]/10">
                in
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Transferencias Vehiculares
                </a>
              </li>
              <li>
                <a href="#services" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Reportes de Deuda
                </a>
              </li>
              <li>
                <a href="#services" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Consultas de Infracciones
                </a>
              </li>
              <li>
                <a href="#services" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Pago de Multas
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Carreras
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-6">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@crgestoria.com.ar" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  info@crgestoria.com.ar
                </a>
              </li>
              <li>
                <a href="tel:+541100000000" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  +54 (11) XXXX-XXXX
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  Formulario de Contacto
                </a>
              </li>
              <li>
                <a href="https://wa.me/5411000000000" target="_blank" rel="noopener noreferrer" className="text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
                  WhatsApp Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--line)] py-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--txt-3)]">
            <div className="flex gap-4">
              <a href="#" className="hover:text-[var(--gold-2)] transition">Privacidad</a>
              <a href="#" className="hover:text-[var(--gold-2)] transition">Términos</a>
              <a href="#" className="hover:text-[var(--gold-2)] transition">Cookies</a>
            </div>
            <div className="text-right">
              <p>&copy; {currentYear} CR Gestoría. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
