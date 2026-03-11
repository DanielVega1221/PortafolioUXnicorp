import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Wrapper de Link que antepone automáticamente el prefijo de idioma.
 * Uso: <LangLink to="/servicios">Servicios</LangLink>
 *      Renderiza: <a href="/es/servicios"> o <a href="/en/servicios">
 */
function LangLink({ to, children, ...props }) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'es';
  const fullTo = typeof to === 'string' && to.startsWith('/') ? `/${lang}${to}` : to;

  return (
    <Link to={fullTo} {...props}>
      {children}
    </Link>
  );
}

export default LangLink;
