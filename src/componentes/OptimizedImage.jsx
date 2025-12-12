/**
 * COMPONENTE: Wrapper para imágenes optimizadas
 * 
 * Props:
 * - src: String - Ruta de la imagen (ya debe estar optimizada)
 * - alt: String - Texto alternativo (IMPORTANTE para accesibilidad y SEO)
 * - loading: 'lazy' | 'eager' - Lazy loading (default: 'lazy')
 * - fetchpriority: 'high' | 'low' | 'auto' - Prioridad de carga
 * - width, height: Number - Dimensiones (evita layout shift)
 * - className: String - Clases CSS adicionales
 * 
 * NOTA:
 * Las imágenes deben estar previamente optimizadas con:
 * npm run optimize:images (genera versiones WebP)
 * 
 * Uso:
 * <OptimizedImage src="/logo.png" alt="Logo UXnicorp" width={80} height={80} />
 */

import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fetchpriority,
  width,
  height,
  ...props 
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading={loading}
      fetchPriority={fetchpriority}
      width={width}
      height={height}
      {...props}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  fetchpriority: PropTypes.oneOf(['high', 'low', 'auto']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default OptimizedImage;
