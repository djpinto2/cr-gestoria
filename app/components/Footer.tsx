export default function Footer() {
  return (
    <footer className="bg-[var(--bg-2)] border-t border-[var(--line)] py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">CR Gestoría</h4>
            <p className="text-sm text-[var(--txt-2)]">
              Soluciones en trámites vehiculares desde 2009
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-[var(--txt-2)]">
              <li><a href="#" className="hover:text-[var(--gold)]">Transferencias</a></li>
              <li><a href="#" className="hover:text-[var(--gold)]">Consultas</a></li>
              <li><a href="#" className="hover:text-[var(--gold)]">Multas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">Contacto</h4>
            <p className="text-sm text-[var(--txt-2)]">info@crgestoria.com.ar</p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-[var(--txt-2)]">
              <li><a href="#" className="hover:text-[var(--gold)]">Privacidad</a></li>
              <li><a href="#" className="hover:text-[var(--gold)]">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--txt-3)]">
          <p>&copy; 2026 CR Gestoría. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
