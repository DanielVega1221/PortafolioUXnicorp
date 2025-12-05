import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MessageSquare, Zap, Shield, Layers, Rocket } from 'lucide-react';
import './Culture.css';
import '../../section-glass-card.css';

const cultureValues = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Escribimos código limpio, mantenible y escalable que otros desarrolladores pueden entender y mejorar fácilmente.",
    color: "#f37aa6"
  },
  {
    icon: MessageSquare,
    title: "Comunicación Clara",
    description: "Mantenemos una línea de comunicación abierta y directa. Sin tecnicismos innecesarios, solo actualizaciones claras del progreso.",
    color: "#ff8cc8"
  },
  {
    icon: Zap,
    title: "Agilidad Real",
    description: "Iteramos rápido, adaptamos según feedback y entregamos valor en cada sprint. No solo hablamos de agilidad, la vivimos.",
    color: "#e0a6d8"
  },
  {
    icon: Shield,
    title: "Calidad Primero",
    description: "Testing exhaustivo, code reviews rigurosos y mejores prácticas en cada línea. La calidad no es negociable.",
    color: "#81ade7"
  },
  {
    icon: Layers,
    title: "Arquitectura Sólida",
    description: "Diseñamos sistemas pensando en el futuro. Cada decisión técnica considera escalabilidad y mantenibilidad.",
    color: "#f37aa6"
  },
  {
    icon: Rocket,
    title: "Entrega Continua",
    description: "Deployment automatizado, integración continua y releases frecuentes. Tu producto evoluciona constantemente.",
    color: "#ff8cc8"
  }
];

export default function Culture() {
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
          <div className="culture-badge">Valores & Principios</div>
          <h2 className="culture-titulo">Cómo construimos software</h2>
          <p className="culture-subtitulo">
            No solo escribimos código, creamos soluciones sostenibles con estándares profesionales 
            que garantizan el éxito a largo plazo de tu producto.
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
                <h3 className="culture-card-title">{value.title}</h3>
                <p className="culture-card-description">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
