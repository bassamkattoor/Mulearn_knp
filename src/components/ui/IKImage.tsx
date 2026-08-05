import { Image } from '@imagekit/react';
import { IK_URL } from '../../lib/imagekit';

interface IKImageProps {
  /**
   * Path in ImageKit media library, e.g. "/site/logo.png"
   * OR a full external URL (e.g. Unsplash) — passed through unchanged.
   */
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  /** Quality 1-100, default 80 */
  quality?: number;
}

/**
 * Drop-in <img> replacement that:
 * - Serves images from ImageKit CDN
 * - Auto-converts to WebP / AVIF
 * - Generates responsive srcSet automatically
 * - Lazy loads by default
 *
 * If `src` is an absolute URL (e.g. Unsplash), it falls back to a plain <img>.
 */
export default function IKImage({
  src,
  alt,
  className,
  width,
  height,
  quality = 80,
}: IKImageProps) {
  // External URL — plain img fallback
  if (src.startsWith('http')) {
    return <img src={src} alt={alt} className={className} width={width} height={height} loading="lazy" />;
  }

  // Empty src — nothing to render
  if (!src) return null;

  const transformation = [
    { quality: String(quality) },
    ...(width ? [{ width: String(width) }] : []),
    ...(height ? [{ height: String(height) }] : []),
  ];

  return (
    <Image
      urlEndpoint={IK_URL}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      transformation={transformation}
      loading="lazy"
    />
  );
}
