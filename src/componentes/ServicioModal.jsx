import React from 'react';
import { X } from 'lucide-react';
import './ServicioModal.css';

function ServicioModal({ isOpen, onClose, servicio }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <h2 className="modal-title">{servicio.titulo}</h2>

        <div className="modal-section">
          <h3>¿Qué es?</h3>
          <p>{servicio.queEs}</p>
        </div>

        <div className="modal-section">
          <h3>¿Para qué sirve?</h3>
          <p>{servicio.paraque}</p>
        </div>

        <div className="modal-section">
          <h3>¿Cómo funciona?</h3>
          <p>{servicio.comoFunciona}</p>
        </div>

        <div className="modal-section">
          <h3>¿Cuándo es recomendado?</h3>
          <p>{servicio.cuando}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicioModal;
