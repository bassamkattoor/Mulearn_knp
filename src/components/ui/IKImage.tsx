import { Image } from '@imagekit/react';
import { useState } from 'react';
import { IK_URL } from '../../lib/imagekit';

interface IKImageProps {
  /**
   * Path in ImageKit media library, e.g. "/site/logo.png"
   * OR a full external URL — passed through as plain <img>.
   */
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  /** Quality 1-100, default 80 */
  quality?: number;
  style?: React.CSSProperties;
}

/**
 * Drop-in <img> replacement backed by ImageKit CDN.
 * - Auto WebP / AVIF conversion
 * - Responsive srcSet
 * - Lazy loading
 * - Falls back to local path on ImageKit 404 (useful during migration)
 */
export default function IKImage({
  src,
  alt,
  className,
  width,
  height,
  quality = 80,
  style,
}: IKImageProps) {
  const [failed, setFailed] = useState(false);

  // External URL or empty — plain img
  if (!src || src.startsWith('http')) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        style={style}
        loading="lazy"
      />
    );
  }

  // Derive local fallback path (strip the ImageKit folder prefix)
  // e.g. "/site/logo.png" → "/logo.png",  "/execom/LEAD.png" → "/execom/LEAD.png"
  const localFallback = src.replace(/^\/site\//, '/').replace(/^\/mulearn-knp\/site\//, '/');

  if (failed) {
    return (
      <img
        src={localFallback}
        alt={alt}
        className={className}
        width={width}
        height={height}
        style={style}
        loading="lazy"
      />
    );
  }

  const transformation: { quality?: number; width?: number; height?: number }[] = [
    { quality },
    ...(width ? [{ width }] : []),
    ...(height ? [{ height }] : []),
  ];

  return (
    <Image
      urlEndpoint={IK_URL}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      transformation={transformation}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
