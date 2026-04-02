import React from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './ServicioModal.css';

function ServicioModal({ isOpen, onClose, servicio }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <h2 className="modal-title">{servicio.titulo}</h2>

        <div className="modal-section">
          <h3>{t('paginas.comun.modalQueEs')}</h3>
          <p>{servicio.queEs}</p>
        </div>

        <div className="modal-section">
          <h3>{t('paginas.comun.modalParaque')}</h3>
          <p>{servicio.paraque}</p>
        </div>

        <div className="modal-section">
          <h3>{t('paginas.comun.modalComoFunciona')}</h3>
          <p>{servicio.comoFunciona}</p>
        </div>

        <div className="modal-section">
          <h3>{t('paginas.comun.modalCuando')}</h3>
          <p>{servicio.cuando}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicioModal;
