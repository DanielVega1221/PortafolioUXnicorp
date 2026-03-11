import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  const currentLang = i18n.language?.slice(0, 2) || 'es';
  const nextLang = currentLang === 'es' ? 'en' : 'es';

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    i18n.changeLanguage(nextLang);
    localStorage.setItem('preferredLang', nextLang);

    // Actualizar el prefijo de idioma en la URL actual
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments[0] === 'es' || segments[0] === 'en') {
      segments[0] = nextLang;
    } else {
      segments.unshift(nextLang);
    }
    navigate('/' + segments.join('/'), { replace: true });

    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <button
      className={`lang-toggle-btn${isAnimating ? ' lang-toggle-animating' : ''}`}
      onClick={handleToggle}
      aria-label={t('langToggle.ariaLabel')}
      title={t('langToggle.tooltip')}
      type="button"
    >
      <span className="lang-toggle-flag">
        {currentLang === 'es' ? '🇦🇷' : '🇺🇸'}
      </span>
      <span className="lang-toggle-label">
        {currentLang === 'es' ? 'ES' : 'EN'}
      </span>
      <span className="lang-toggle-next">
        → {nextLang.toUpperCase()}
      </span>
    </button>
  );
}

export default LanguageToggle;
