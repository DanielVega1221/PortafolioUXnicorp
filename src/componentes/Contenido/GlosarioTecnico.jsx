import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { HelpCircle, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './GlosarioTecnico.css';

function GlosarioTecnico() {
  const [terminoActivo, setTerminoActivo] = useState(null);
  const { t } = useTranslation();
  const glosarioItems = t('glosario.items', { returnObjects: true });
  const glosarioData = Array.isArray(glosarioItems) ? glosarioItems : [];

  return (
    <section className="glosario-section">
      <div className="section-glass-card">
        <div className="glosario-header">
          <h2 className="glosario-title">
            <HelpCircle size={32} />
            {t('glosario.titulo')}
          </h2>
          <p className="glosario-subtitle">
            {t('glosario.subtitulo')}
          </p>
        </div>

        <div className="glosario-grid">
          {glosarioData.map((item, idx) => (
            <Motion.div
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
                <Motion.p
                  className="glosario-definicion"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {item.definicion}
                </Motion.p>
              )}
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlosarioTecnico;
