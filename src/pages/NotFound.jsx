import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLangNavigate } from '../hooks/useLangNavigate';
import './NotFound.css';

function NotFound() {
  const navigate = useLangNavigate();
  const { t } = useTranslation();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-emoji">🔍</div>
        <div className="notfound-code">404</div>
        <h1>{t('notFound.titulo')}</h1>
        <p>{t('notFound.descripcion')}</p>
        <div className="notfound-buttons">
          <button 
            onClick={() => navigate('/')} 
            className="notfound-btn notfound-btn-primary"
          >
            🏠 {t('notFound.boton')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
