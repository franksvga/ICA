import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { ResilientImage } from '../components/ResilientImage';
import { PRODUCTS, SERVICES } from '../data/engineeringData';

interface ContactPageProps {
  preselectedSubject: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

export function ContactPage({ preselectedSubject }: ContactPageProps) {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Consultoría e Ingeniería Hidráulica');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!preselectedSubject) return;
    if (preselectedSubject.startsWith('Cotización de producto:')) {
      setInquiryType('Cotización de Productos y Equipos');
    } else {
      setInquiryType('Consultoría e Ingeniería Hidráulica');
    }
    setMessage(`${preselectedSubject}. `);
    setSubmitted(false);
  }, [preselectedSubject]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Ingrese su nombre completo.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Ingrese un correo electrónico válido.';
    }
    if (!inquiryType.trim()) {
      nextErrors.inquiryType = 'Seleccione el tipo de requerimiento.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Describa brevemente el alcance o requerimiento (mínimo 10 caracteres).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div>
      {/* Page Intro */}
      <section className="relative overflow-hidden bg-white pt-14 pb-12 border-b border-slate-200/80">
        <div className="absolute inset-0">
          <ResilientImage
            src="/src/assets/images/contact_engineering_cover_1795737173146.jpg"
            alt="Centro de ingeniería hidráulica junto a embalse y obras de captación de agua"
            fallbackLabel="Contacto Técnico y Comercial"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.92)_42%,rgba(255,255,255,0.68)_72%,rgba(255,255,255,0.22)_100%)]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold text-[#0072B5] mb-3">Contacto Técnico y Comercial</p>
            <h1 className="text-[clamp(2rem,3.4vw,2.9rem)] font-bold tracking-tight leading-[1.12] text-[#0B1D2C] text-balance mb-3 max-w-2xl">
              Converse con nuestro equipo de ingeniería
            </h1>
            <p className="text-base text-[#334155] max-w-2xl leading-relaxed">
              Atendemos consultas sobre estudios hidrológicos, diseño de obras, cotización de equipos
              y supervisión técnica con respuesta inicial en menos de 24 horas hábiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact layout */}
      <section className="bg-[#F6F9FC] py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left column: Direct contact info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
              >
                <h2 className="text-lg font-semibold text-[#0B1D2C]">Canales Directos</h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#0072B5] shrink-0 mt-1" />
                    <div className="space-y-2">
                      <div className="font-medium text-[#0B1D2C]">Correos Electrónicos</div>
                      <div className="space-y-2">
                        <div>
                          <span className="text-xs font-medium text-[#0072B5] block">
                            Administración
                          </span>
                          <a
                            href="mailto:administracion@ica-hidraulica.com"
                            className="text-[#475569] hover:text-[#0072B5] transition-colors"
                          >
                            administracion@ica-hidraulica.com
                          </a>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-[#0072B5] block">
                            Ventas
                          </span>
                          <a
                            href="mailto:ventas@ica-hidraulica.com"
                            className="text-[#475569] hover:text-[#0072B5] transition-colors"
                          >
                            ventas@ica-hidraulica.com
                          </a>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-[#0072B5] block">
                            Ingeniería
                          </span>
                          <a
                            href="mailto:ingenieria@ica-hidraulica.com"
                            className="text-[#475569] hover:text-[#0072B5] transition-colors"
                          >
                            ingenieria@ica-hidraulica.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0072B5] shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-[#0B1D2C]">Central Telefónica</div>
                      <div className="font-mono tabular-nums text-[#475569]">+51 (01) 482 3900</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0072B5] shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-[#0B1D2C]">Oficina Central</div>
                      <div className="text-[#475569]">
                        Av. República de Panamá 3418, Of. 602, San Isidro
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#0072B5] shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-[#0B1D2C]">Horario de Atención</div>
                      <div className="text-[#475569]">
                        Lunes a Viernes · 08:30 a 18:00 hrs
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0072B5] text-white rounded-xl p-5 space-y-1.5 flex-1 flex flex-col justify-center"
              >
                <h3 className="text-base font-semibold leading-snug">
                  ¿Tiene un proyecto en mente?
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Nuestro equipo técnico y comercial está listo para asesorarlo. Escríbanos o envíe
                  el formulario y le responderemos a la brevedad.
                </p>
              </motion.div>
            </div>

            {/* Right column: Full Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-7 sm:p-9"
            >
              <div className="mb-6">
                <p className="text-sm font-medium text-[#0072B5] mb-1">
                  Formulario de Solicitud
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-[#0B1D2C]">
                  Envíenos los detalles de su requerimiento
                </h2>
              </div>

              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-6 rounded-xl bg-[#F6F9FC] border border-[#5FA22A]/40 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#5FA22A] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-[#0B1D2C]">
                        Solicitud registrada correctamente
                      </h3>
                      <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                        Gracias, <span className="font-medium text-[#0B1D2C]">{name}</span>. Hemos
                        recibido su solicitud sobre{' '}
                        <span className="font-medium text-[#0072B5]">{inquiryType}</span> y
                        responderemos a{' '}
                        <span className="font-medium text-[#0B1D2C]">{email}</span> en menos de 24
                        horas hábiles.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-sm font-medium text-[#0072B5] bg-white border border-slate-200 hover:border-[#0072B5] rounded-lg transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#0B1D2C] mb-1.5"
                      >
                        Nombre y apellido <span className="text-[#0072B5]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Ing. Carlos Mendoza"
                        className={`w-full px-3.5 py-2.5 text-sm text-[#0B1D2C] bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0072B5]/20 focus:border-[#0072B5] ${
                          errors.name ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-org"
                        className="block text-sm font-medium text-[#0B1D2C] mb-1.5"
                      >
                        Empresa o entidad
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Municipalidad, constructora o industria"
                        className="w-full px-3.5 py-2.5 text-sm text-[#0B1D2C] bg-white border border-slate-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0072B5]/20 focus:border-[#0072B5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[#0B1D2C] mb-1.5"
                      >
                        Correo electrónico <span className="text-[#0072B5]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nombre@empresa.com"
                        className={`w-full px-3.5 py-2.5 text-sm text-[#0B1D2C] bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0072B5]/20 focus:border-[#0072B5] ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[#0B1D2C] mb-1.5"
                      >
                        Teléfono de contacto
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+51 999 000 000"
                        className="w-full px-3.5 py-2.5 text-sm text-[#0B1D2C] bg-white border border-slate-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0072B5]/20 focus:border-[#0072B5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block text-sm font-medium text-[#0B1D2C] mb-1.5"
                    >
                      Área o motivo de consulta <span className="text-[#0072B5]">*</span>
                    </label>
                    <select
                      id="contact-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className={`w-full px-3.5 py-2.5 text-sm text-[#0B1D2C] bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0072B5]/20 focus:border-[#0072B5] ${
                        errors.inquiryType ? 'border-red-500' : 'border-slate-300'
                      }`}
                    >
                      <option value="Consultoría e Ingeniería Hidráulica">
                        Consultoría e Ingeniería Hidráulica
                      </option>
                      <option value="Cotización de Productos y Equipos">
                        Cotización de Productos y Equipos
                      </option>
                      {SERVICES.map((item) => (
                        <option key={item.id} value={item.title}>
                          Servicio: {item.title}
                        </option>
                      ))}
                      {PRODUCTS.map((item) => (
                        <option key={item.id} value={item.name}>
                          Producto: {item.name}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.inquiryType}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#0B1D2C] mb-1.5"
                    >
                      Descripción y parámetros del proyecto <span className="text-[#0072B5]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Indique ubicación, caudal aproximado, equipo de interés o alcance requerido."
                      className={`w-full px-3.5 py-2.5 text-sm text-[#0B1D2C] bg-white border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0072B5]/20 focus:border-[#0072B5] ${
                        errors.message ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-[#475569]">
                      Los campos marcados con <span className="text-[#0072B5]">*</span> son
                      obligatorios.
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-3 text-sm font-medium text-white bg-[#0072B5] hover:bg-[#00588E] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0072B5]"
                    >
                      Enviar Solicitud Técnica
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
