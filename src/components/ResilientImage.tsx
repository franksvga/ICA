import { useState } from 'react';
import { Droplets } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Infraestructura Hidráulica ICA',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F6F9FC] via-[#EBF3F9] to-[#E2EEF6] text-[#0072B5] p-6 text-center ${className}`}
      >
        <Droplets className="w-8 h-8 mb-2 opacity-75" strokeWidth={1.5} />
        <span className="text-xs font-medium text-[#0B1D2C]/75 max-w-[220px]">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
