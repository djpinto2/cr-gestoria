'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const services = [
    "Transferencias Vehiculares",
    "Reportes de Deuda",
    "Consultas de Infracciones",
    "Pago de Multas"
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Contactanos Hoy</h2>
          <p className="text-[var(--txt-2)] max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto dentro de 24 horas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-[var(--gold-2)] mb-3 flex items-center gap-2">
                <span className="text-2xl">📧</span> Email
              </h3>
              <p className="text-[var(--txt-2)] mb-2">info@crgestoria.com.ar</p>
              <a href="mailto:info@crgestoria.com.ar" className="text-sm text-[var(--accent)] hover:underline">
                Enviar correo →
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--gold-2)] mb-3 flex items-center gap-2">
                <span className="text-2xl">📱</span> Teléfono
              </h3>
              <p className="text-[var(--txt-2)] mb-2">+54 (11) XXXX-XXXX</p>
              <a href="tel:+541100000000" className="text-sm text-[var(--accent)] hover:underline">
                Llamar ahora →
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--gold-2)] mb-3 flex items-center gap-2">
                <span className="text-2xl">💬</span> WhatsApp
              </h3>
              <p className="text-[var(--txt-2)] mb-2">Soporte en tiempo real</p>
              <a href="https://wa.me/5411000000000" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] hover:underline">
                Iniciar chat →
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--gold-2)] mb-3 flex items-center gap-2">
                <span className="text-2xl">📍</span> Ubicación
              </h3>
              <p className="text-[var(--txt-2)]">Buenos Aires, Argentina</p>
              <p className="text-xs text-[var(--txt-3)] mt-1">Atención 100% online</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[var(--txt-1)] mb-2">
                  Nombre Completo *
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--txt)] placeholder-[var(--txt-3)] focus:outline-none focus:border-[var(--gold-2)] focus:ring-1 focus:ring-[var(--gold-2)]/50 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[var(--txt-1)] mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--txt)] placeholder-[var(--txt-3)] focus:outline-none focus:border-[var(--gold-2)] focus:ring-1 focus:ring-[var(--gold-2)]/50 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[var(--txt-1)] mb-2">
                  Teléfono
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+54 (11) 0000-0000"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--txt)] placeholder-[var(--txt-3)] focus:outline-none focus:border-[var(--gold-2)] focus:ring-1 focus:ring-[var(--gold-2)]/50 transition"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-[var(--txt-1)] mb-2">
                  Servicio Requerido *
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--txt)] focus:outline-none focus:border-[var(--gold-2)] focus:ring-1 focus:ring-[var(--gold-2)]/50 transition"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[var(--txt-1)] mb-2">
                  Mensaje *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos sobre tu necesidad..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--line)] text-[var(--txt)] placeholder-[var(--txt-3)] focus:outline-none focus:border-[var(--gold-2)] focus:ring-1 focus:ring-[var(--gold-2)]/50 transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={submitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-[var(--gold-2)] to-green-400 text-[var(--bg)] font-bold rounded-lg hover:shadow-lg hover:shadow-[var(--gold-2)]/30 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? '✓ Mensaje Enviado' : 'Enviar Mensaje'}
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-400/10 border border-green-400/30 rounded-lg text-center text-green-400 text-sm">
                  ¡Gracias por tu mensaje! Nos contactaremos pronto.
                </div>
              )}

              {/* Privacy Note */}
              <p className="text-xs text-[var(--txt-3)] text-center">
                Tus datos están protegidos. No compartimos información con terceros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
