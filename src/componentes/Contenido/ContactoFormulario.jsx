import React, { useState } from 'react';
import './ContactoFormulario.css';
import '../../section-glass-card.css';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

// Utilidades de seguridad
const SecurityUtils = {
  // Sanitizar texto removiendo caracteres peligrosos
  sanitizeText: (text) => {
    if (!text) return '';
    return text
      .replace(/[<>]/g, '') // Remover < y >
      .replace(/javascript:/gi, '') // Remover javascript:
      .replace(/on\w+=/gi, '') // Remover event handlers (onclick=, onerror=, etc)
      .replace(/script/gi, '') // Remover palabra script
      .replace(/eval\(/gi, '') // Remover eval
      .trim();
  },

  // Validar email con regex estricto
  isValidEmail: (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email) && email.length <= 100;
  },

  // Validar teléfono (solo números, espacios, guiones y +)
  isValidPhone: (phone) => {
    const phoneRegex = /^[\d\s+()-]{8,20}$/;
    return phoneRegex.test(phone);
  },

  // Validar nombre (solo letras, espacios y acentos)
  isValidName: (name) => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
    return nameRegex.test(name);
  },

  // Validar longitud de texto
  isValidLength: (text, min, max) => {
    return text.length >= min && text.length <= max;
  },

  // Detectar patrones sospechosos
  containsSuspiciousPatterns: (text) => {
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+=/i,
      /eval\(/i,
      /<iframe/i,
      /<object/i,
      /<embed/i,
      /base64/i,
      /data:text\/html/i,
      /vbscript:/i
    ];
    return suspiciousPatterns.some(pattern => pattern.test(text));
  }
};

function ContactoFormulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    empresa: '',
    telefono: '',
    email: '',
    servicio: '',
    consulta: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';

    // Detectar patrones sospechosos primero
    if (SecurityUtils.containsSuspiciousPatterns(value)) {
      return 'Contenido no permitido detectado';
    }

    switch (name) {
      case 'nombre':
      case 'apellido':
        if (!value.trim()) {
          error = 'Este campo es requerido';
        } else if (!SecurityUtils.isValidName(value)) {
          error = 'Solo se permiten letras y espacios (2-50 caracteres)';
        }
        break;

      case 'empresa':
        if (value && !SecurityUtils.isValidLength(value, 2, 100)) {
          error = 'Debe tener entre 2 y 100 caracteres';
        }
        break;

      case 'servicio':
        // Campo opcional, no requiere validación
        break;

      case 'telefono':
        if (!value.trim()) {
          error = 'Este campo es requerido';
        } else if (!SecurityUtils.isValidPhone(value)) {
          error = 'Formato de teléfono inválido';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Este campo es requerido';
        } else if (!SecurityUtils.isValidEmail(value)) {
          error = 'Email inválido';
        }
        break;

      case 'consulta':
        if (!value.trim()) {
          error = 'Este campo es requerido';
        } else if (!SecurityUtils.isValidLength(value, 10, 1000)) {
          error = 'Debe tener entre 10 y 1000 caracteres';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Sanitizar el valor inmediatamente
    const sanitizedValue = SecurityUtils.sanitizeText(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validateField(name, sanitizedValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      if (key !== 'empresa' && key !== 'servicio') { // empresa y servicio son opcionales
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const generateFormattedMessage = () => {
    // Sanitizar todos los datos antes de generar el mensaje
    const safeData = {
      nombre: SecurityUtils.sanitizeText(formData.nombre),
      apellido: SecurityUtils.sanitizeText(formData.apellido),
      empresa: SecurityUtils.sanitizeText(formData.empresa),
      telefono: SecurityUtils.sanitizeText(formData.telefono),
      email: SecurityUtils.sanitizeText(formData.email),
      servicio: SecurityUtils.sanitizeText(formData.servicio),
      consulta: SecurityUtils.sanitizeText(formData.consulta)
    };

    const empresaText = safeData.empresa ? `\nEmpresa: ${safeData.empresa}` : '';
    const servicioText = safeData.servicio ? `\nServicio de interés: ${safeData.servicio}` : '';
    
    return `Hola, mi nombre es ${safeData.nombre} ${safeData.apellido}.${empresaText}${servicioText}

Datos de contacto:
 Email: ${safeData.email}
 Teléfono: ${safeData.telefono}

Consulta:
${safeData.consulta}

Quedamos a la espera de su respuesta.
Saludos cordiales.`;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Por favor, corrige los errores en el formulario');
      return;
    }

    const safeData = {
      nombre: SecurityUtils.sanitizeText(formData.nombre),
      apellido: SecurityUtils.sanitizeText(formData.apellido),
      empresa: SecurityUtils.sanitizeText(formData.empresa),
      email: SecurityUtils.sanitizeText(formData.email),
      telefono: SecurityUtils.sanitizeText(formData.telefono),
      servicio: SecurityUtils.sanitizeText(formData.servicio),
      consulta: SecurityUtils.sanitizeText(formData.consulta)
    };

    const empresaText = safeData.empresa ? `\nEmpresa: ${safeData.empresa}` : '';
    const servicioText = safeData.servicio ? `\nServicio de interés: ${safeData.servicio}` : '';
    
    const subject = `Consulta de ${safeData.nombre} ${safeData.apellido}`;
    const body = `Hola, mi nombre es ${safeData.nombre} ${safeData.apellido}.${empresaText}${servicioText}

Datos de contacto:
Email: ${safeData.email}
Teléfono: ${safeData.telefono}

Consulta:
${safeData.consulta}

Quedamos a la espera de su respuesta.
Saludos cordiales.`;

    const mailtoLink = `mailto:uxnicorp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Por favor, corrige los errores en el formulario');
      return;
    }

    const message = generateFormattedMessage();
    const whatsappNumber = '5491123504530'; // Buenos Aires
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const isFormValid = () => {
    return (
      formData.nombre &&
      formData.apellido &&
      formData.telefono &&
      formData.email &&
      formData.consulta &&
      Object.values(errors).every(error => !error)
    );
  };

  return (
    <section id="contact" className="contacto-section">
      <div className="section-glass-card">
        <h2 className="contacto-titulo">
          ¿Tenés un proyecto en mente? <span className="contacto-highlight">Hablemos</span>
        </h2>
      <p className="contacto-subtitulo">
        Completá el formulario y elegí cómo contactarnos: por email o WhatsApp
      </p>

      <div className="contacto-container">
        {/* Columna Izquierda - Formulario */}
        <div className="contacto-form-wrapper">
          <form className="contacto-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Juan"
                maxLength="50"
                autoComplete="given-name"
                className={errors.nombre && touched.nombre ? 'input-error' : ''}
              />
              {errors.nombre && touched.nombre && (
                <span className="error-message">{errors.nombre}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido *</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Pérez"
                maxLength="50"
                autoComplete="family-name"
                className={errors.apellido && touched.apellido ? 'input-error' : ''}
              />
              {errors.apellido && touched.apellido && (
                <span className="error-message">{errors.apellido}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="empresa">Empresa (opcional)</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Mi Empresa S.A."
                maxLength="100"
                autoComplete="organization"
                className={errors.empresa && touched.empresa ? 'input-error' : ''}
              />
              {errors.empresa && touched.empresa && (
                <span className="error-message">{errors.empresa}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="servicio">Servicio de interés (opcional)</label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Seleccionar servicio...</option>
                <optgroup label="Auditorías">
                  <option value="Auditoría UX/UI Profesional">Auditoría UX/UI Profesional</option>
                  <option value="Optimización de Conversión (CRO)">Optimización de Conversión (CRO)</option>
                  <option value="Revisión Técnica + Mini-Refactor">Revisión Técnica + Mini-Refactor</option>
                </optgroup>
                <optgroup label="Páginas Web">
                  <option value="Landing Express Basic">Landing Express Basic (72hs)</option>
                  <option value="Landing Express Intermedia">Landing Express Intermedia</option>
                  <option value="Landing Express Full">Landing Express Full</option>
                  <option value="Landing Flyer Promo">Landing Flyer Promo</option>
                  <option value="Landing Premium a Medida">Landing Premium a Medida</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Sistemas de Gestión">Sistemas de Gestión a Medida</option>
                </optgroup>
                <optgroup label="Paquetes">
                  <option value="Paquete Emprendedor">Paquete Emprendedor - Presencia Rápida</option>
                  <option value="Paquete Auditoría Integral">Paquete Auditoría Integral</option>
                  <option value="Plan Evolución">Plan Evolución - Escalá tu Web</option>
                </optgroup>
                <option value="Otra consulta">Otra consulta</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+54 9 11 1234-5678"
                maxLength="20"
                autoComplete="tel"
                className={errors.telefono && touched.telefono ? 'input-error' : ''}
              />
              {errors.telefono && touched.telefono && (
                <span className="error-message">{errors.telefono}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="tu@email.com"
                maxLength="100"
                autoComplete="email"
                className={errors.email && touched.email ? 'input-error' : ''}
              />
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="consulta">Contanos sobre tu proyecto *</label>
              <textarea
                id="consulta"
                name="consulta"
                value={formData.consulta}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="6"
                placeholder="Describí brevemente tu idea, necesidades o consulta..."
                maxLength="1000"
                className={errors.consulta && touched.consulta ? 'input-error' : ''}
              />
              <div className="char-count">
                {formData.consulta.length}/1000 caracteres
              </div>
              {errors.consulta && touched.consulta && (
                <span className="error-message">{errors.consulta}</span>
              )}
            </div>

            <div className="contacto-buttons-wrapper">
              <button 
                type="button"
                className="contacto-submit-btn email-btn"
                onClick={handleEmailSubmit}
                disabled={!isFormValid()}
                title={!isFormValid() ? 'Completa todos los campos correctamente' : 'Enviar por Email'}
              >
                <FaEnvelope />
                <span>Enviar por Email</span>
              </button>

              <button 
                type="button"
                className="contacto-submit-btn whatsapp-btn"
                onClick={handleWhatsAppSubmit}
                disabled={!isFormValid()}
                title={!isFormValid() ? 'Completa todos los campos correctamente' : 'Enviar por WhatsApp'}
              >
                <FaWhatsapp />
                <span>Enviar por WhatsApp</span>
              </button>
            </div>
          </form>
        </div>

        {/* Columna Derecha - Info de Contacto */}
        <div className="contacto-info-wrapper">
          <div className="contacto-info-card">
            <h3>También podés contactarnos por:</h3>
            
            <div className="contacto-info-item">
              <div className="contacto-info-icon email-icon">
                <FaEnvelope />
              </div>
              <div className="contacto-info-content">
                <span className="contacto-info-label">Email</span>
                <a href="mailto:uxnicorp@gmail.com" className="contacto-info-value">
                  uxnicorp@gmail.com
                </a>
              </div>
            </div>

            <div className="contacto-info-divider">
              <span>WhatsApp por región</span>
            </div>

            <div className="contacto-info-item">
              <div className="contacto-info-icon whatsapp-icon">
                <FaWhatsapp />
              </div>
              <div className="contacto-info-content">
                <span className="contacto-info-label">Catamarca</span>
                <a href="https://wa.me/5493834368748" target="_blank" rel="noopener noreferrer" className="contacto-info-value">
                  +54 9 3834 368748
                </a>
              </div>
            </div>

            <div className="contacto-info-item">
              <div className="contacto-info-icon whatsapp-icon">
                <FaWhatsapp />
              </div>
              <div className="contacto-info-content">
                <span className="contacto-info-label">Buenos Aires</span>
                <a href="https://wa.me/5491123504530" target="_blank" rel="noopener noreferrer" className="contacto-info-value">
                  +54 9 11 2350-4530
                </a>
              </div>
            </div>

            <div className="contacto-horario">
              <p>⏰ Horario de atención</p>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
            </div>
          </div>

          {/* Garantía - Dentro de la columna derecha */}
          <div className="contacto-garantia">
            <div className="garantia-icon">✓</div>
            <div className="garantia-text">
              <strong>Respuesta garantizada</strong>
              <p>Te contactamos en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ContactoFormulario;
