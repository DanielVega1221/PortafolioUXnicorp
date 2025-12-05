/**
 * OptimizedImage - Componente para cargar imágenes optimizadas con lazy loading
 * Las imágenes ya fueron optimizadas por el script optimize-images.mjs
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
