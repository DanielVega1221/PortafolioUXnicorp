import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Wrapper de useNavigate que antepone automáticamente el prefijo de idioma.
 * Uso: const navigate = useLangNavigate();
 *      navigate('/servicios') → /es/servicios o /en/servicios
 */
export function useLangNavigate() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'es';

  return (to, options) => {
    if (typeof to === 'string' && to.startsWith('/')) {
      navigate(`/${lang}${to}`, options);
    } else {
      navigate(to, options);
    }
  };
}
