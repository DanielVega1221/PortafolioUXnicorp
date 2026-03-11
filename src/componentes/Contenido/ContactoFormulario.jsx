import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const location = useLocation();
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

  // Pre-llenar el servicio si viene desde navegación
  useEffect(() => {
    if (location.state?.servicioInteres) {
      setFormData(prev => ({
        ...prev,
        servicio: location.state.servicioInteres
      }));
    }
  }, [location.state]);

  const validateField = (name, value) => {
    let error = '';

    if (SecurityUtils.containsSuspiciousPatterns(value)) {
      return t('contacto.errores.contenidoNoPermitido');
    }

    switch (name) {
      case 'nombre':
      case 'apellido':
        if (!value.trim()) {
          error = t('contacto.errores.requerido');
        } else if (!SecurityUtils.isValidName(value)) {
          error = t('contacto.errores.nombreInvalido');
        }
        break;

      case 'empresa':
        if (value && !SecurityUtils.isValidLength(value, 2, 100)) {
          error = t('contacto.errores.empresaLongitud');
        }
        break;

      case 'servicio':
        break;

      case 'telefono':
        if (!value.trim()) {
          error = t('contacto.errores.requerido');
        } else if (!SecurityUtils.isValidPhone(value)) {
          error = t('contacto.errores.telefonoInvalido');
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = t('contacto.errores.requerido');
        } else if (!SecurityUtils.isValidEmail(value)) {
          error = t('contacto.errores.emailInvalido');
        }
        break;

      case 'consulta':
        if (!value.trim()) {
          error = t('contacto.errores.requerido');
        } else if (!SecurityUtils.isValidLength(value, 10, 1000)) {
          error = t('contacto.errores.consultaLongitud');
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Para campos de texto que permiten espacios, solo remover caracteres peligrosos
    // Para email/telefono, remover también espacios
    let cleanValue = value;
    
    if (name === 'email') {
      // Email: sin espacios
      cleanValue = value.replace(/\s/g, '').replace(/[<>]/g, '');
    } else if (name === 'telefono') {
      // Teléfono: permitir solo números, espacios, +, -, () 
      cleanValue = value.replace(/[^0-9\s+()-]/g, '');
    } else {
      // Nombre, apellido, empresa, consulta: permitir espacios
      cleanValue = value
        .replace(/[<>]/g, '') // Remover < y >
        .replace(/javascript:/gi, '') // Remover javascript:
        .replace(/on\w+=/gi, '') // Remover event handlers
        .replace(/script/gi, '') // Remover palabra script
        .replace(/eval\(/gi, ''); // Remover eval
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: cleanValue
    }));

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validateField(name, cleanValue);
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

    const empresaText = safeData.empresa ? t('contacto.mensaje.empresa', { empresa: safeData.empresa }) : '';
    const servicioText = safeData.servicio ? t('contacto.mensaje.servicio', { servicio: safeData.servicio }) : '';
    
    return `${t('contacto.mensaje.saludo', { nombre: safeData.nombre, apellido: safeData.apellido })}${empresaText}${servicioText}${t('contacto.mensaje.datosContacto', { email: safeData.email, telefono: safeData.telefono, consulta: safeData.consulta })}`;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert(t('contacto.corregirErrores'));
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

    const empresaText = safeData.empresa ? t('contacto.mensaje.empresa', { empresa: safeData.empresa }) : '';
    const servicioText = safeData.servicio ? t('contacto.mensaje.servicio', { servicio: safeData.servicio }) : '';
    
    const subject = t('contacto.mensaje.asunto', { nombre: safeData.nombre, apellido: safeData.apellido });
    const body = `${t('contacto.mensaje.saludo', { nombre: safeData.nombre, apellido: safeData.apellido })}${empresaText}${servicioText}${t('contacto.mensaje.datosContacto', { email: safeData.email, telefono: safeData.telefono, consulta: safeData.consulta })}`;

    const mailtoLink = `mailto:uxnicorp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert(t('contacto.corregirErrores'));
      return;
    }

    const message = generateFormattedMessage();
    const whatsappNumber = '5493834368748';
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
          {t('contacto.titulo')} <span className="contacto-highlight">{t('contacto.tituloDestacado')}</span>
        </h2>
      <p className="contacto-subtitulo">
        {t('contacto.subtitulo')}
      </p>

      <div className="contacto-container">
        {/* Columna Izquierda - Formulario */}
        <div className="contacto-form-wrapper">
          <form className="contacto-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="nombre">{t('contacto.nombre')} *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('contacto.nombrePlaceholder')}
                maxLength="50"
                autoComplete="given-name"
                className={errors.nombre && touched.nombre ? 'input-error' : ''}
              />
              {errors.nombre && touched.nombre && (
                <span className="error-message">{errors.nombre}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="apellido">{t('contacto.apellido')} *</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('contacto.apellidoPlaceholder')}
                maxLength="50"
                autoComplete="family-name"
                className={errors.apellido && touched.apellido ? 'input-error' : ''}
              />
              {errors.apellido && touched.apellido && (
                <span className="error-message">{errors.apellido}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="empresa">{t('contacto.empresa')}</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('contacto.empresaPlaceholder')}
                maxLength="100"
                autoComplete="organization"
                className={errors.empresa && touched.empresa ? 'input-error' : ''}
              />
              {errors.empresa && touched.empresa && (
                <span className="error-message">{errors.empresa}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="servicio">{t('contacto.servicio')}</label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">{t('contacto.servicioDefault')}</option>
                <optgroup label={t('contacto.grupos.diagnosticos')}>
                  <option value="Diagnóstico para estudio de Arquitectura">{t('contacto.opciones.diagArq')}</option>
                  <option value="Diagnóstico para restaurante / gastronomía">{t('contacto.opciones.diagGastro')}</option>
                </optgroup>
                <optgroup label={t('contacto.grupos.auditorias')}>
                  <option value="Auditoría UX/UI Profesional">{t('contacto.opciones.audUxUi')}</option>
                  <option value="Optimización de Conversión (CRO)">{t('contacto.opciones.audCro')}</option>
                  <option value="Revisión Técnica + Mini-Refactor">{t('contacto.opciones.audTecnica')}</option>
                </optgroup>
                <optgroup label={t('contacto.grupos.paginasWeb')}>
                  <option value="Landing Express Basic">{t('contacto.opciones.landingBasic')}</option>
                  <option value="Landing Express Intermedia">{t('contacto.opciones.landingMedia')}</option>
                  <option value="Landing Express Full">{t('contacto.opciones.landingFull')}</option>
                  <option value="Landing Flyer Promo">{t('contacto.opciones.landingFlyer')}</option>
                  <option value="Landing Premium a Medida">{t('contacto.opciones.landingPremium')}</option>
                  <option value="E-commerce">{t('contacto.opciones.ecommerce')}</option>
                  <option value="Sistemas de Gestión">{t('contacto.opciones.sistemas')}</option>
                </optgroup>
                <optgroup label={t('contacto.grupos.paquetes')}>
                  <option value="Paquete Emprendedor">{t('contacto.opciones.paqEmprendedor')}</option>
                  <option value="Paquete Auditoría Integral">{t('contacto.opciones.paqAuditoria')}</option>
                  <option value="Plan Evolución">{t('contacto.opciones.planEvolucion')}</option>
                </optgroup>
                <option value="Otra consulta">{t('contacto.opciones.otra')}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="telefono">{t('contacto.telefono')} *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('contacto.telefonoPlaceholder')}
                maxLength="20"
                autoComplete="tel"
                className={errors.telefono && touched.telefono ? 'input-error' : ''}
              />
              {errors.telefono && touched.telefono && (
                <span className="error-message">{errors.telefono}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contacto.email')} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('contacto.emailPlaceholder')}
                maxLength="100"
                autoComplete="email"
                className={errors.email && touched.email ? 'input-error' : ''}
              />
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="consulta">{t('contacto.consulta')} *</label>
              <textarea
                id="consulta"
                name="consulta"
                value={formData.consulta}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="6"
                placeholder={t('contacto.consultaPlaceholder')}
                maxLength="1000"
                className={errors.consulta && touched.consulta ? 'input-error' : ''}
              />
              <div className="char-count">
                {t('contacto.caracteres', { count: formData.consulta.length })}
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
                title={!isFormValid() ? t('contacto.completarCampos') : t('contacto.enviarEmail')}
              >
                <FaEnvelope />
                <span>{t('contacto.enviarEmail')}</span>
              </button>

              <button 
                type="button"
                className="contacto-submit-btn whatsapp-btn"
                onClick={handleWhatsAppSubmit}
                disabled={!isFormValid()}
                title={!isFormValid() ? t('contacto.completarCampos') : t('contacto.enviarWhatsapp')}
              >
                <FaWhatsapp />
                <span>{t('contacto.enviarWhatsapp')}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Columna Derecha - Info de Contacto */}
        <div className="contacto-info-wrapper">
          <div className="contacto-info-card">
            <h3>{t('contacto.infoTitulo')}</h3>
            
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
              <span>{t('contacto.whatsappPorRegion')}</span>
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
              <p>⏰ {t('contacto.horario')}</p>
              <p>{t('contacto.horarioL5')}</p>
              <p>{t('contacto.horarioSab')}</p>
            </div>
          </div>

          {/* Garantía - Dentro de la columna derecha */}
          <div className="contacto-garantia">
            <div className="garantia-icon">✓</div>
            <div className="garantia-text">
              <strong>{t('contacto.garantiaTitulo')}</strong>
              <p>{t('contacto.garantiaDesc')}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ContactoFormulario;
