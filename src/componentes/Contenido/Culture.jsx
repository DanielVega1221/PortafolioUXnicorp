import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, MessageSquare, Zap, Shield, Layers, Rocket } from 'lucide-react';
import './Culture.css';
import '../../section-glass-card.css';

export default function Culture() {
  const { t } = useTranslation();

  const cultureValues = [
    { key: 'cleanCode', icon: Code2, color: '#f37aa6' },
    { key: 'comunicacion', icon: MessageSquare, color: '#ff8cc8' },
    { key: 'agilidad', icon: Zap, color: '#e0a6d8' },
    { key: 'calidad', icon: Shield, color: '#81ade7' },
    { key: 'arquitectura', icon: Layers, color: '#f37aa6' },
    { key: 'entrega', icon: Rocket, color: '#ff8cc8' },
  ];

  return (
    <section className="culture-section">
      <div className="section-glass-card">
        <div className="culture-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="culture-header"
        >
          <div className="culture-badge">{t('culture.badge')}</div>
          <h2 className="culture-titulo">{t('culture.titulo')}</h2>
          <p className="culture-subtitulo">
            {t('culture.subtitulo')}
          </p>
        </motion.div>

        <div className="culture-grid">
          {cultureValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="culture-card"
                style={{ '--card-color': value.color }}
              >
                <div className="culture-icon-wrapper">
                  <IconComponent className="culture-icon" />
                </div>
                <h3 className="culture-card-title">{t(`culture.${value.key}.titulo`)}</h3>
                <p className="culture-card-description">{t(`culture.${value.key}.descripcion`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
