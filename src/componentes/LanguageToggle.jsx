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

  const FlagAR = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="20" height="14" style={{borderRadius:'2px',display:'block',flexShrink:0}}>
      <rect width="900" height="600" fill="#74acdf"/>
      <rect y="200" width="900" height="200" fill="#fff"/>
      <circle cx="450" cy="300" r="60" fill="#F6B40E" stroke="#85340A" strokeWidth="4"/>
    </svg>
  );

  const FlagUS = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 100" width="20" height="14" style={{borderRadius:'2px',display:'block',flexShrink:0}}>
      <rect width="190" height="100" fill="#B22234"/>
      <rect y="7.7" width="190" height="7.7" fill="#fff"/>
      <rect y="23" width="190" height="7.7" fill="#fff"/>
      <rect y="38.4" width="190" height="7.7" fill="#fff"/>
      <rect y="53.8" width="190" height="7.7" fill="#fff"/>
      <rect y="69.2" width="190" height="7.7" fill="#fff"/>
      <rect y="84.6" width="190" height="7.7" fill="#fff"/>
      <rect width="76" height="53.8" fill="#3C3B6E"/>
    </svg>
  );

  return (
    <button
      className={`lang-toggle-btn${isAnimating ? ' lang-toggle-animating' : ''}`}
      onClick={handleToggle}
      aria-label={t('langToggle.ariaLabel')}
      title={t('langToggle.tooltip')}
      type="button"
    >
      <span className="lang-toggle-flag">
        {currentLang === 'es' ? <FlagAR /> : <FlagUS />}
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
