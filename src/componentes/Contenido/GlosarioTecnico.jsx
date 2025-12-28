import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Info } from 'lucide-react';
import './GlosarioTecnico.css';

const glosarioData = [
  {
    termino: 'Responsive',
    definicion: 'Diseño que se adapta automáticamente a cualquier tamaño de pantalla (celular, tablet, computadora) para que tu web se vea bien en todos los dispositivos.'
  },
  {
    termino: 'SEO (Search Engine Optimization)',
    definicion: 'Optimización para motores de búsqueda. Son técnicas para que tu web aparezca en los primeros resultados de Google cuando alguien busca tus servicios.'
  },
  {
    termino: 'Landing Page',
    definicion: 'Página de aterrizaje diseñada específicamente para convertir visitantes en clientes. Tiene un objetivo claro: que te contacten, compren o se registren.'
  },
  {
    termino: 'CRM (Customer Relationship Management)',
    definicion: 'Sistema para gestionar clientes: guardar contactos, hacer seguimiento de ventas, registrar interacciones. Como una agenda inteligente para tu negocio.'
  },
  {
    termino: 'ERP (Enterprise Resource Planning)',
    definicion: 'Sistema para administrar toda tu empresa: ventas, compras, inventario, facturación, empleados, todo integrado en un solo lugar.'
  },
  {
    termino: 'UX/UI (User Experience / User Interface)',
    definicion: 'UX es la experiencia del usuario (qué tan fácil es usar tu web). UI es la interfaz (cómo se ve). Juntos hacen que tu web sea bonita Y fácil de usar.'
  },
  {
    termino: 'CRO (Conversion Rate Optimization)',
    definicion: 'Optimización de tasa de conversión. Hacer cambios en tu web para que más visitantes se conviertan en clientes, sin necesidad de más tráfico.'
  },
  {
    termino: 'Hosting',
    definicion: 'El "alojamiento" de tu web. Es como el terreno donde está construida tu casa digital. Sin hosting, tu web no existe en internet.'
  },
  {
    termino: 'Dominio',
    definicion: 'La dirección de tu web (ejemplo: tuempresa.com). Es como el nombre de tu negocio en internet, único y exclusivo.'
  },
  {
    termino: 'SSL/HTTPS',
    definicion: 'Certificado de seguridad que hace que tu web sea confiable (aparece el candadito en el navegador). Google prioriza webs con SSL.'
  },
  {
    termino: 'API (Application Programming Interface)',
    definicion: 'Conexión entre diferentes sistemas. Por ejemplo, conectar tu web con Mercado Pago, con tu sistema de envíos o con redes sociales.'
  },
  {
    termino: 'Dashboard',
    definicion: 'Panel de control con gráficos y métricas clave. Te permite ver el estado de tu negocio de un vistazo: ventas, clientes, inventario, etc.'
  },
  {
    termino: 'Backup',
    definicion: 'Copia de seguridad de tu web o sistema. Si algo falla, se puede restaurar todo como estaba. Como tener un "guardado" de tu juego favorito.'
  },
  {
    termino: 'Escalable',
    definicion: 'Que puede crecer sin problemas. Un sistema escalable funciona bien si tenés 10 clientes o 10.000, sin necesidad de rehacer todo.'
  },
  {
    termino: 'Pasarela de Pago',
    definicion: 'Sistema para cobrar online (como Mercado Pago, Stripe). Permite que tus clientes paguen con tarjeta de forma segura en tu web.'
  }
];

function GlosarioTecnico() {
  const [terminoActivo, setTerminoActivo] = useState(null);

  return (
    <section className="glosario-section">
      <div className="section-glass-card">
        <div className="glosario-header">
          <h2 className="glosario-title">
            <HelpCircle size={32} />
            Glosario Técnico
          </h2>
          <p className="glosario-subtitle">
            Entendé todos los términos técnicos en lenguaje simple y claro
          </p>
        </div>

        <div className="glosario-grid">
          {glosarioData.map((item, idx) => (
            <motion.div
              key={idx}
              className={`glosario-item ${terminoActivo === idx ? 'active' : ''}`}
              onClick={() => setTerminoActivo(terminoActivo === idx ? null : idx)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <div className="glosario-termino">
                <span>{item.termino}</span>
                <Info size={18} />
              </div>
              {terminoActivo === idx && (
                <motion.p
                  className="glosario-definicion"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {item.definicion}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlosarioTecnico;
