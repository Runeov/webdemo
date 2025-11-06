import { useState } from 'react';

const SafeImage = ({
  src,
  alt = 'Image',
  fallback = '/images/placeholder.svg',
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallback);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      console.warn('🖼️ Image failed to load, using fallback:', src);
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  // Validate src is a string and not empty
  const validSrc = (typeof imgSrc === 'string' && imgSrc.trim() !== '') ? imgSrc : fallback;

  return (
    <img
      src={validSrc}
      alt={typeof alt === 'string' ? alt : 'Image'}
      onError={handleError}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

export default SafeImage;